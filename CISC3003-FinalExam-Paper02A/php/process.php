<?php
session_start();
require_once(__DIR__ . '/../db/connect.php');  // Database connection file

// A.05 Process submitted form data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Retrieve raw input
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $rating = $_POST['rating'] ?? '';
    $interests = isset($_POST['interests']) ? implode(',', $_POST['interests']) : '';
    $hear = $_POST['hear'] ?? '';
    $comments = trim($_POST['comments'] ?? '');
    
    // A.06 Validate using filter functions
    $errors = [];
    
    // Validate name (required, letters and spaces only)
    if (empty($name) || !preg_match('/^[a-zA-Z\s]+$/', $name)) {
        $errors[] = 'Name is required and may only contain letters and spaces.';
    }
    
    // Validate email (using filter_var)
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please provide a valid email address.';
    }
    
    // Validate rating
    $valid_ratings = [1,2,3,4,5];
    if (!in_array($rating, $valid_ratings)) {
        $errors[] = 'Please select a satisfaction rating.';
    }
    
    // If there are errors, return and display them
    if (!empty($errors)) {
        $_SESSION['msg'] = implode('<br>', $errors);
        header('Location: index.php');
        exit;
    }
    
    // No errors: proceed to insert into the database
    // --- A.07 Prevent SQL injection + A.08 use prepared statements ---
    
    try {
        $pdo = getDBConnection(); // Defined in connect.php
        
        // A.08 Insert new record using prepared statement
        $sql = "INSERT INTO feedbacks (name, email, rating, interests, comments) 
                VALUES (:name, :email, :rating, :interests, :comments)";
        $stmt = $pdo->prepare($sql);
        
        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':rating' => $rating,
            ':interests' => $interests,
            ':comments' => $comments
        ]);
        
        $_SESSION['msg'] = 'Thank you for your feedback! Your response has been submitted successfully.';
        // A.05 Redirect to avoid duplicate submissions (PRG pattern)
        header('Location: index.php');
        exit;
        
    } catch (PDOException $e) {
        // Log the error (do not show detailed errors in production)
        error_log($e->getMessage());
        $_SESSION['msg'] = 'A system error occurred. Please try again later.';
        header('Location: index.php');
        exit;
    }
    
} else {
    // Invalid access
    header('Location: index.php');
    exit;
}