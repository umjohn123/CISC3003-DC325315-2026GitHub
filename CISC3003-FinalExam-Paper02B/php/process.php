<?php
session_start();
require_once __DIR__ . './../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// B.05 PRG: only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.php');
    exit;
}

// Collect and sanitize input
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');

// Server-side validation
$errors = [];
if (empty($name) || strlen($name) < 2) $errors[] = 'Invalid name';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email';
if (empty($subject) || strlen($subject) < 2) $errors[] = 'Invalid subject';
if (empty($message) || strlen($message) < 10) $errors[] = 'Invalid message';

if (!empty($errors)) {
    $_SESSION['status'] = 'error';
    $_SESSION['message'] = 'Please fill in all fields correctly: ' . implode(', ', $errors);
    header('Location: index.php');
    exit;
}

// ==================== Send email (PHPMailer) ====================
$mail = new PHPMailer(true);

try {
    // B.02 Configure SMTP
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = '2206620751qq.com@gmail.com';      // ⚠️ Replace with your Gmail
    $mail->Password   = 'qwgwgwyiwnxljnuh';         // ⚠️ Replace with your app password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // B.04 Debug mode (set to 2 for testing, 0 for production)
    $mail->SMTPDebug = 0;

    // Sender (fixed to your Gmail)
    $mail->setFrom('2206620751qq.com@gmail.com', 'CISC3003 Contact');

    // ========== Key: Send to different users ==========
    $mail->addAddress($email, $name);          // To the user
    // Optional: CC to admin (uncomment to enable)
    // $mail->addCC('admin@example.com', 'Admin');
    $mail->addReplyTo($email, $name);          // Reply to user email

    // Email content (HTML + plain text)
    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->isHTML(true);
    $mail->Subject = 'Thank you for contacting us: ' . $subject;

    $htmlBody = <<<HTML
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"></head>
    <body>
        <h2>Dear {$name}, Hello!</h2>
        <p>Thank you for contacting us. We have received your message and will process it as soon as possible.</p>
        <p><strong>The information you submitted is as follows:</strong></p>
        <table>
            <tr><td><strong>Subject:</strong></td><td>{$subject}</td></tr>
            <tr><td style="vertical-align:top;"><strong>Content:</strong></td><td>" . nl2br(htmlspecialchars($message)) . "</td></tr>
        </table>
        <p>This email is automatically sent, please do not reply directly.</p>
        <hr>
        <small>CISC3003 Contact Form System</small>
    </body>
    </html>
    HTML;
    $mail->Body = $htmlBody;
    $mail->AltBody = "Dear {$name}, Hello!\nThank you for contacting us.\nSubject: {$subject}\nContent:\n{$message}\n\nThis email is automatically sent.";

    // B.03 发送邮件
    $mail->send();

    $_SESSION['status'] = 'success';
    $_SESSION['message'] = "✓ 确认邮件已发送至您的邮箱 {$email}，请查收。感谢您的联系！";

} catch (Exception $e) {
    // B.04 调试时可输出 $mail->ErrorInfo
    $_SESSION['status'] = 'error';
    $_SESSION['message'] = '✗ 邮件发送失败，请稍后再试。';
    // 调试时使用下面两行（替换上面一行）:
    // $_SESSION['status'] = 'error';
    // $_SESSION['message'] = '发送失败：' . $mail->ErrorInfo;
}

// B.05 Post/Redirect/Get
header('Location: thanks.php');
exit;