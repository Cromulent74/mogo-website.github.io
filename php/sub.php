<?php

    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $email = $_POST['user-email'];

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'ifomko2003@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
    $mail->Password = 'Starkoonelove200374'; // Ваш пароль от почты с которой будут отправляться письма
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

    $mail->setFrom('ifomko2003@mail.ru'); // от кого будет уходить письмо?
    $mail->addAddress('ilya.fomko03@mail.ru');     // Кому будет уходить письмо 
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Кто-то подписался на рассылку';
    $mail->Body    = 'Почта пользователя: ' . $email;
    $mail->AltBody = '';

    if(!$mail->send()) {
        echo 'Error';
    } else {
        header('Location: '.'../index.html');
    }
?>
