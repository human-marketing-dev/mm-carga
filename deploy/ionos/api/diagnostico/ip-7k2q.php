<?php
// TEMPORAL: muestra la IP de salida del hosting para autorizarla en Brevo. Borrar después.
header('Content-Type: text/plain; charset=utf-8');
header('X-Robots-Tag: noindex');
$ch = curl_init('https://api.ipify.org');
curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10]);
$ip = curl_exec($ch) ?: ('error: ' . curl_error($ch));
curl_close($ch);
echo "IP de salida: $ip\n";
$config = is_file(__DIR__ . '/../solicitud/config.php') ? require __DIR__ . '/../solicitud/config.php' : [];
if (!empty($config['BREVO_API_KEY'])) {
  $ch = curl_init('https://api.brevo.com/v3/account');
  curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 10,
    CURLOPT_HTTPHEADER => ['api-key: ' . $config['BREVO_API_KEY'], 'accept: application/json']]);
  $r = curl_exec($ch); $code = curl_getinfo($ch, CURLINFO_HTTP_CODE); curl_close($ch);
  $msg = json_decode((string)$r, true)['message'] ?? '';
  echo "Brevo: HTTP $code " . ($code == 200 ? 'OK' : $msg) . "\n";
} else {
  echo "Brevo: falta config\n";
}
