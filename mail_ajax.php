<?php 
    header("Content-Type: application/json", true);
    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");

    json_encode($_GET['uname']);

    $to = "mike000027@yandex.ru"; // this is your Email address
    $name = $_GET['uname'];  
    $phone = $_GET['phone'];
    $city = $_GET['city'];
    $email = $_GET['email'];
    $subject = "Name:" . $name  . " , City:" . $city . " , Phone:" . $phone;
    $message = "message";

    $headers = "From:" . $email;
    mail($to,$subject,$message,$headers);
    //echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.

?>