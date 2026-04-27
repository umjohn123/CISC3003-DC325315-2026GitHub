<?php
require_once __DIR__ . '/includes/bootstrap.php';

if (isLoggedIn()) {
    header('Location: cisc3003-TeamAssgn.html');
    exit;
}

$error = '';
$success = getFlash();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    
    if (empty($email) || empty($password)) {
        $error = 'Please fill in both fields';
    } else {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();
        
        if ($user && password_verify($password, $user['password_hash'])) {
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['user_email'] = $user['email'];
            $_SESSION['user_name'] = $user['full_name'];
            $_SESSION['logged_in'] = true;
            
            $pdo->prepare("UPDATE users SET last_login = NOW() WHERE id = ?")->execute([$user['id']]);
            
            header('Location: cisc3003-TeamAssgn.html');
            exit;
        } else {
            $error = 'Invalid email or password';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Crispy College Meals</title>
    <link rel="shortcut icon" href="./assets/images/favicon.svg" type="image/svg+xml">
    <link href="https://fonts.googleapis.com/css2?family=Forum&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/auth.css">
</head>
<body>
    <header class="header" data-header>
        <div class="container">
            <a href="cisc3003-TeamAssgn.html" class="logo">
                <img src="./assets/images/logo.svg" width="130" height="45" alt="Crispy home">
            </a>
        </div>
    </header>

    <main>
        <div class="auth-container">
            <h1 class="auth-title">Login</h1>
            
            <?php if ($error): ?>
                <div class="error-msg"><?php echo htmlspecialchars($error); ?></div>
            <?php endif; ?>
            
            <?php if ($success && $success['type'] === 'success'): ?>
                <div class="success-msg"><?php echo htmlspecialchars($success['message']); ?></div>
            <?php endif; ?>
            
            <form id="login-form">
                <div class="form-group">
                    <input type="email" id="email" name="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="password" placeholder="Password" required>
                </div>
                <div class="forgot-password-link" style="text-align: right; margin-top: 10px; margin-bottom: 20px;">
                    <a href="forgot-password.php" style="color: #d49b3a; font-size: 1.25rem;">Forgot Password?</a>
                </div>
                <button type="submit" class="btn-auth">Login</button>
            </form>
            
            <div class="auth-link">
                Don't have an account? <a href="register.php">Register now</a>
            </div>
        </div>
    </main>

    <script src="./assets/js/script.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
</html>