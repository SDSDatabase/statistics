<?php 
$db_server = "localhost";
$db_username = "root";
$db_pw = "";
$db_name = "myStats";

$conn = mysqli_connect($db_server, $db_username, $db_pw);
if(!$conn){
    die('Connection failed: '.mysqli_connect_error());
}

// ! Statements
$sql_create_db = "CREATE DATABASE $db_name";
$result = $conn ->query("SHOW DATABASES LIKE  '$db_name'");

if($result->num_rows == 1){
        echo "Database $db_name exists.";
} else {
    if(mysqli_query($conn, $sql_create_db)){
        echo "Database created successfully";
    } else {
        echo "Error creating database: ".mysqli_error($conn);
    }
}

mysqli_close($conn);
?>