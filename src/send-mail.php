<?php
// Allow requests from anywhere (for React frontend)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

// Read JSON input (React usually sends JSON)
$input = json_decode(file_get_contents("php://input"), true);

// Fallback for normal form POST
if (!$input) {
    $input = $_POST;
}

// Collect fields safely
$name    = isset($input["name"]) ? trim($input["name"]) : "";
$email   = isset($input["email"]) ? trim($input["email"]) : "";
$phone   = isset($input["phone"]) ? trim($input["phone"]) : "";
$subject = isset($input["subject"]) ? trim($input["subject"]) : "Website Enquiry";
$message = isset($input["message"]) ? trim($input["message"]) : "";
$address = isset($input["address"]) ? trim($input["address"]) : "";
$product = isset($input["product"]) ? trim($input["product"]) : "";

// Basic validation
if ($name === "" || $email === "" || $phone === "") {
    echo json_encode(["status" => "error", "message" => "Required fields missing"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email"]);
    exit;
}

// Where to send
$to = "santoshpolyfab@gmail.com";

// Email subject
$mailSubject = "New Enquiry from Website";

// Build email body
$body = "You have received a new enquiry from your website:\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Phone: " . $phone . "\n";

if ($subject !== "") {
    $body .= "Subject: " . $subject . "\n";
}

if ($product !== "") {
    $body .= "Product: " . $product . "\n";
}

if ($address !== "") {
    $body .= "Address: " . $address . "\n";
}

if ($message !== "") {
    $body .= "Message: " . $message . "\n";
}

$body .= "\n---\nSent from your website contact form";

// Headers
$headers = "From: Website Enquiry <no-reply@" . $_SERVER["SERVER_NAME"] . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send mail
if (mail($to, $mailSubject, $body, $headers)) {
    echo json_encode(["status" => "success", "message" => "Mail sent successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Mail sending failed"]);
}
?>