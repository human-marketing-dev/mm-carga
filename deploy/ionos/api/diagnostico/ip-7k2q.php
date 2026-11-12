<?php
// TEMPORAL: diagnóstico del formulario en IONOS (IP de salida, configuración, envío de prueba). Borrar después.
header('Content-Type: text/plain; charset=utf-8');
header('X-Robots-Tag: noindex');
function get($url, $opts = []) {
  $ch = curl_init($url);
  curl_setopt_array($ch, $opts + [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 15]);
  $r = curl_exec($ch); $c = curl_getinfo($ch, CURLINFO_HTTP_CODE); $e = curl_error($ch); curl_close($ch);
  return [$c, $r === false ? "curl: $e" : $r];
}
echo "PHP " . PHP_VERSION . "\n";
echo "IP de salida: " . get('https://api.ipify.org')[1] . "\n";
$f = __DIR__ . '/../solicitud/config.php';
$config = is_file($f) ? require $f : [];
foreach (['BREVO_API_KEY', 'FORM_TO_EMAIL', 'FORM_SENDER_EMAIL', 'FORM_SENDER_NAME', 'BREVO_LIST_ID'] as $k) {
  $v = (string)($config[$k] ?? '');
  echo "$k: " . ($v === '' ? '(vacío)' : ($k === 'BREVO_API_KEY' ? 'ok, ' . strlen($v) . ' caracteres, empieza ' . substr($v, 0, 6) : $v)) . "\n";
}
$tmp = sys_get_temp_dir();
echo "Temp: $tmp " . (is_writable($tmp) ? 'escribible' : 'NO escribible') . "\n";
if (($_GET['enviar'] ?? '') === '1' && !empty($config['BREVO_API_KEY'])) {
  [$c, $r] = get('https://api.brevo.com/v3/smtp/email', [
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => ['api-key: ' . $config['BREVO_API_KEY'], 'content-type: application/json', 'accept: application/json'],
    CURLOPT_POSTFIELDS => json_encode([
      'sender' => ['email' => $config['FORM_SENDER_EMAIL'], 'name' => 'Sitio web MM Carga'],
      'to' => [['email' => trim(explode(',', $config['FORM_TO_EMAIL'])[0])]],
      'subject' => 'PRUEBA de diagnóstico del sitio (ignorar)',
      'textContent' => 'Correo de prueba enviado desde el hosting de IONOS.',
    ]),
  ]);
  echo "Envío de prueba por Brevo: HTTP $c $r\n";
} else {
  echo "Para mandar un correo de prueba agrega ?enviar=1 a la URL\n";
}
