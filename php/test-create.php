<?php 
$db_server = "localhost";
$db_username = "root";
$db_pw = "";

$conn = mysqli_connect($db_server, $db_username, $db_pw);
if(!$conn){
    die('Connection failed:'.mysqli_connect_error());
}
echo "Connected!"

?>