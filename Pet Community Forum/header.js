// header.js
window.addEventListener('DOMContentLoaded', function() {
    var headerElement = document.getElementById('header');
  
    // Fetch and inject the header HTML
    fetch('header.html')
      .then(function(response) {
        return response.text();
      })
      .then(function(html) {
        headerElement.innerHTML = html;
      })
      .catch(function(error) {
        console.log('Error fetching header:', error);
      });
  
    // Handle profile button click
    headerElement.addEventListener('click', function(e) {
      if (e.target.classList.contains('profile-button')) {
        // Redirect to the profile page
        window.location.href = '/profile.html';
      }
    });
  });
  