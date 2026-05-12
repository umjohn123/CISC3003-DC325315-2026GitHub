<?php
// Start session to display feedback messages (optional)
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scenario A - User Feedback Form</title>
    <!-- Use Water.css for simple styling -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css">
    <link rel="stylesheet" href="./css/styles.css">
</head>
<body>
    <h1>User Satisfaction Feedback</h1>
    <?php if(isset($_SESSION['msg'])): ?>
        <div class="message"><?= htmlspecialchars($_SESSION['msg']) ?></div>
        <?php unset($_SESSION['msg']); ?>
    <?php endif; ?>

    <!-- Form: A.01 Use best practices (method="post", action points to handler) -->
    <form method="post" action="process.php" novalidate>
        <!-- A.02 Simple text input -->
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required placeholder="Enter your name">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="Enter your email">

        <!-- A.04 Radio buttons (rating) -->
        <fieldset>
            <legend>Overall Satisfaction:</legend>
            <label><input type="radio" name="rating" value="5" required> Very Satisfied</label>
            <label><input type="radio" name="rating" value="4"> Satisfied</label>
            <label><input type="radio" name="rating" value="3"> Neutral</label>
            <label><input type="radio" name="rating" value="2"> Dissatisfied</label>
            <label><input type="radio" name="rating" value="1"> Very Dissatisfied</label>
        </fieldset>

        <!-- A.04 Checkboxes (interests) -->
        <fieldset>
            <legend>Services of Interest:</legend>
            <label><input type="checkbox" name="interests[]" value="PHP"> PHP Development</label>
            <label><input type="checkbox" name="interests[]" value="MySQL"> MySQL</label>
            <label><input type="checkbox" name="interests[]" value="Frontend"> Frontend Technology</label>
        </fieldset>

        <!-- A.04 Select dropdown -->
        <label for="hear">How did you hear about us?</label>
        <select id="hear" name="hear">
            <option value="Search Engine">Search Engine</option>
            <option value="Friend Referral">Friend Referral</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
        </select>

        <!-- A.03 Textarea comments -->
        <label for="comments">Comments or Suggestions:</label>
        <textarea id="comments" name="comments" rows="5" placeholder="Please share your feedback..."></textarea>

        <button type="submit">Submit Feedback</button>
    </form>

    <!-- Footer should include student information -->
    <footer>
        <p>CISC3003 Web Programming: CHAO WEN JIE + DC325315 + 2026</p>
    </footer>
</body>
</html>