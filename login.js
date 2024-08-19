const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic validation (replace with your actual logic)
  if (username === 'your_username' && password === 'your_password') {
    localStorage.setItem('username', username);
    // Redirect to the dashboard or homepage
    window.location.href = 'dashboard.html'; // Replace with your desired page
  } else {
    alert('Invalid username or password');
  }
});