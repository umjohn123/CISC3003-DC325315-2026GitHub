<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - Scenario B</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <link rel="stylesheet" href="css/styles.css">
    <script src="js/validate.js" defer></script>
</head>
<body>
    <h1>📬 Contact Us</h1>

    <?php if (isset($_SESSION['status'], $_SESSION['message'])): ?>
        <div class="status-box status-<?= htmlspecialchars($_SESSION['status']) ?>">
            <?= nl2br(htmlspecialchars($_SESSION['message'])) ?>
        </div>
        <?php unset($_SESSION['status'], $_SESSION['message']); ?>
    <?php endif; ?>

    <form id="contactForm" method="post" action="process.php" novalidate>
        <div class="form-group">
            <label for="name">Your Name:</label>
            <input type="text" id="name" name="name" required minlength="2">
            <div class="error-message" id="nameError"></div>
        </div>

        <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required>
            <div class="error-message" id="emailError"></div>
        </div>

        <div class="form-group">
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
            <div class="error-message" id="subjectError"></div>
        </div>

        <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="6" required minlength="10"></textarea>
            <div class="error-message" id="messageError"></div>
        </div>

        <div class="form-actions">
            <button type="submit">Send Message</button>
            <button type="reset">Reset</button>
        </div>
    </form>

    <footer>
        <p>CISC3003 Web Programming: CHAO WEN JIE + DC325315 + 2026</p>
    </footer>
</body>
</html>