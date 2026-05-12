<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Email Status</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <h1>📨 Email Status</h1>

    <?php if (isset($_SESSION['status'], $_SESSION['message'])): ?>
        <div class="status-box status-<?= htmlspecialchars($_SESSION['status']) ?>">
            <?= nl2br(htmlspecialchars($_SESSION['message'])) ?>
        </div>
        <?php unset($_SESSION['status'], $_SESSION['message']); ?>
    <?php else: ?>
        <p>No message to display.</p>
    <?php endif; ?>

    <p><a href="index.php">← Return to the contact form</a></p>

    <footer>
        <p>CISC3003 Web Programming: CHAOWENJIE + DC325315 + 2026</p>
    </footer>
</body>
</html>