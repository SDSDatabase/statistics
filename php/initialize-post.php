<?php
    require('db.php');

    if(isset($_POST['add-field'])){
        $input_type = $_POST['input-type'];
        $table_name = "form_table_" . time();

        $sql = "CREATE TABLE $table_name (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        $input_type VARCHAR(255) NOT NULL
        )";

        if (mysqli_query($conn, $sql)) {
            echo "Table created successfully";
        } else {
            echo "Error creating table: " . mysqli_error($conn);
        }
    }
?>