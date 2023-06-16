<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Create a new user object
    $user = array(
        "username" => $username,
        "email" => $email,
        "password" => $password
    );

    // Read the existing user data from the JSON file
    $usersData = file_get_contents("users.json");
    $users = json_decode($usersData, true);

    // Add the new user to the array
    $users[] = $user;

    // Save the updated user data back to the JSON file
    file_put_contents("users.json", json_encode($users));

    // Redirect the user to the home page
    header("Location: index.html");
    exit();
}
?>
