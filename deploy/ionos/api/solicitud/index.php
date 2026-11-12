<?php
// Formularios de cotización (Home, servicios y Contacto) en la versión estática de IONOS.
// Hace lo mismo que app/api/solicitud/route.node.ts (versión Node): valida, limita envíos
// y manda el correo por Brevo. La configuración (clave de Brevo, correos) vive en
// config.php, junto a este archivo, que genera el despliegue a partir de los secretos de
// GitHub. Nunca va en el repo.

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function responder(int $status, array $body): void {
  http_response_code($status);
  echo json_encode($body);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  responder(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$config = is_file(__DIR__ . '/config.php') ? require __DIR__ . '/config.php' : [];
$apiKey = $config['BREVO_API_KEY'] ?? '';
$to = array_values(array_filter(array_map('trim', explode(',', $config['FORM_TO_EMAIL'] ?? ''))));
$sender = $config['FORM_SENDER_EMAIL'] ?? '';
if ($apiKey === '' || !$to || $sender === '') {
  error_log('[solicitud] Faltan datos de configuración de Brevo');
  responder(503, ['ok' => false, 'error' => 'not_configured']);
}

// Solo envíos desde el propio sitio
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (!preg_match('#^https?://(([a-z0-9-]+\.)*mmcarga\.com|([a-z0-9-]+\.)*humanmarketing\.mx|localhost(:\d+)?)$#i', $origin)) {
  responder(403, ['ok' => false, 'error' => 'forbidden']);
}
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
  responder(413, ['ok' => false, 'error' => 'bad_request']);
}

// Límite de envíos por IP: 5 cada 10 minutos (archivo en la carpeta temporal del servidor)
$ip = $_SERVER['REMOTE_ADDR'] ?? 'desconocida';
$dir = sys_get_temp_dir() . '/mmcarga-solicitud';
if (!is_dir($dir)) @mkdir($dir, 0700, true);
$file = $dir . '/' . hash('sha256', $ip);
$ahora = time();
$recientes = [];
if (is_file($file)) {
  $recientes = array_filter(
    array_map('intval', explode("\n", (string)@file_get_contents($file))),
    fn($t) => $t > $ahora - 600
  );
}
if (count($recientes) >= 5) {
  error_log('[solicitud] Límite de envíos alcanzado para ' . $ip);
  responder(429, ['ok' => false, 'error' => 'rate_limited']);
}
$recientes[] = $ahora;
@file_put_contents($file, implode("\n", $recientes), LOCK_EX);

$raw = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($raw)) responder(400, ['ok' => false, 'error' => 'bad_request']);

$limpiar = fn($v) => is_string($v) ? mb_substr(trim($v), 0, 2000) : '';

// Campo trampa para bots: si viene lleno, se responde OK sin enviar nada
if ($limpiar($raw['sitio_web'] ?? '') !== '') responder(200, ['ok' => true]);

$campos = [
  'motivo' => 'Motivo',
  'nombre' => 'Nombre',
  'empresa' => 'Empresa',
  'telefono' => 'Teléfono',
  'correo' => 'Correo',
  'servicio' => 'Servicio de interés',
  'origen' => 'Origen',
  'destino' => 'Destino',
  'mensaje' => 'Mensaje',
  'pagina' => 'Página',
];
$d = [];
foreach ($campos as $k => $_) $d[$k] = $limpiar($raw[$k] ?? '');

if ($d['nombre'] === '' || $d['telefono'] === '' || !filter_var($d['correo'], FILTER_VALIDATE_EMAIL)) {
  responder(400, ['ok' => false, 'error' => 'invalid']);
}

$motivo = $d['motivo'] !== '' ? $d['motivo'] : 'Cotización';
$filas = '';
$texto = '';
foreach ($campos as $k => $etiqueta) {
  if ($d[$k] === '') continue;
  $filas .= '<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top"><b>' . $etiqueta
    . '</b></td><td style="padding:6px 0;white-space:pre-wrap">'
    . htmlspecialchars($d[$k], ENT_QUOTES, 'UTF-8') . '</td></tr>';
  $texto .= "$etiqueta: {$d[$k]}\n";
}

function brevo(string $ruta, string $apiKey, array $body): array {
  $ch = curl_init('https://api.brevo.com/v3' . $ruta);
  curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
    // Salir siempre por IPv4: es la IP autorizada en Brevo (por IPv6 cambia y Brevo la bloquea)
    CURLOPT_IPRESOLVE => CURL_IPRESOLVE_V4,
    CURLOPT_HTTPHEADER => ['api-key: ' . $apiKey, 'content-type: application/json', 'accept: application/json'],
    CURLOPT_POSTFIELDS => json_encode($body),
  ]);
  $res = curl_exec($ch);
  $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $err = curl_error($ch);
  curl_close($ch);
  return [$status, $res === false ? $err : $res];
}

[$status, $res] = brevo('/smtp/email', $apiKey, [
  'sender' => ['email' => $sender, 'name' => ($config['FORM_SENDER_NAME'] ?? '') ?: 'Sitio web MM Carga'],
  'to' => array_map(fn($e) => ['email' => $e], $to),
  'replyTo' => ['email' => $d['correo'], 'name' => $d['nombre']],
  'subject' => "$motivo desde el sitio web: {$d['nombre']}" . ($d['empresa'] !== '' ? " ({$d['empresa']})" : ''),
  'htmlContent' => '<p>Nueva solicitud desde el sitio web de MM Carga.</p><table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">' . $filas . '</table>',
  'textContent' => "Nueva solicitud desde el sitio web de MM Carga.\n\n" . $texto,
]);
if ($status < 200 || $status >= 300) {
  error_log("[solicitud] Brevo /smtp/email $status $res");
  responder(502, ['ok' => false, 'error' => 'send_failed']);
}

// Guardar en lista (opcional). Si falla, la solicitud ya se envió por correo.
$lista = (int)($config['BREVO_LIST_ID'] ?? 0);
if ($lista > 0) {
  [$s2, $r2] = brevo('/contacts', $apiKey, [
    'email' => $d['correo'],
    'attributes' => ['FIRSTNAME' => $d['nombre']],
    'listIds' => [$lista],
    'updateEnabled' => true,
  ]);
  if ($s2 < 200 || $s2 >= 300) error_log("[solicitud] Brevo /contacts $s2 $r2");
}

responder(200, ['ok' => true]);
