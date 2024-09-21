<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email configuration
    $to = "urmotan1@gmail.com"; // Replace with your email address
    $subject = "Support Request from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Support request sent successfully!";
    } else {
        echo "There was an error sending your request. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>
