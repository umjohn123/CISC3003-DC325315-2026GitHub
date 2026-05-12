<?php
// db/connect.php
function getDBConnection() {
    $host = 'localhost';
    $dbname = 'cisc3003_final_a';
    $username = 'root';      // XAMPP 默认
    $password = '';          // 默认空
    $charset = 'utf8mb4';
    
    $dsn = "mysql:host=$host;dbname=$dbname;charset=$charset";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    
    try {
        return new PDO($dsn, $username, $password, $options);
    } catch (PDOException $e) {
        die('Database connection failed: ' . $e->getMessage());
    }
}
?>