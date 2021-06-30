<?php
$servername="localhost";
$username="root";
$password="";
$database_name="nemesiscontact";

$conn=mysqli_connect($servername, $username, $password, $database_name);

if(!$conn)
{
    die("Connection Failed:" . mysqli_connect_error());
}

if(isset($_POST['save']))
{
    $Name = $_POST['Name'];
    $Mail = $_POST['Mail'];
    $Message = $_POST['Message'];

    $sql_query = "INSERT INTO contact_details (Name,Mail,Message)
    VALUES ('$Name','$Mail','$Message')";

    if (mysqli_query($conn, $sql_query))
    {
        echo "New Details Entered Successfully !";
    }
    else
    {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>