document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  // Here you can add your login validation logic
  // For example, check if the username and password are correct
  if (username === 'admin' && password === 'password') {
    alert('Login successful');
    // Redirect to the home page (index.html)
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password');
  }
});
