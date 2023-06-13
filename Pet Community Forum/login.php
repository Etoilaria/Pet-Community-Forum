<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Replace with your actual login validation logic
  if ($username === 'admin' && $password === 'admin123') {
    $_SESSION['username'] = $username;
    header('Location: threads.html');
    exit;
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Pet Community Forum - Login</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <div id="login-container">
    <h2>Login</h2>
    <form action="login.php" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Log In</button>
    </form>
  </div>
</body>
</html>
``
