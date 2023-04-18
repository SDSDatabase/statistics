<?php 
    // Author: Afwan 21B6027
    // ! To connect to the database
    $db_server = "";
    $db_username = "";
    $db_pw = "";
    $db_name = "";

    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
?>
