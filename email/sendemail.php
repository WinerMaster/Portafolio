<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: *");

$method = $_SERVER['REQUEST_METHOD'];

if($method != "POST") die();

function verify($input, $name) {
    return isset($input[$name]) ? (!empty($input[$name]) ? $input[$name] : false) : false;
}

$data = @file_get_contents('php://input'); // Obtengo datos del POST
$data = (array)json_decode($data); // Transformo los datos en Array


require $_SERVER['DOCUMENT_ROOT'] . '/lib/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/lib/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/lib/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer();

$name = verify($data, "name");
$subject = "PORTAFOLIO";
$email = verify($data, "email");
$message = verify($data, "message");

try {

    if($name && $email && $message) {

        $mail->SMTPDebug = 0; // SMTP::DEBUG_SERVER // Activar la salida de depuración detallada
        $mail->isSMTP(); // Enviar mediante SMTP
        $mail->Host       = 'smtp.gmail.com'; // Establecer el servidor SMTP para enviar a través de                  
        $mail->Port       = 587; // Puerto TCP al que conectarse; utilice 587 si ha configurado `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`.
        $mail->SMTPAuth   = true; // Activar la autenticación SMTP
        $mail->Username   = 'correo_usuario'; // SMTP nombre de usuario 
        $mail->Password   = 'contraseña'; // SMTP contraseña
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Activar el cifrado TLS implícito
        $mail->setFrom("correo_usuario");
        $mail->addAddress($email, $name); // Este sería el remitente
    
        $mail->Subject = $subject;
        $mail->msgHTML("nombre: $name <br> correo:$email <br>".$message);
    
        if($mail->send()) echo 'PHPMailer: Message sent successfully'; 
        else echo "Mailer Error: {$mail->ErrorInfo}";

    } else die();

} catch(Exception $error) {
    echo "PHPMailer: $error";
}




