document.addEventListener('DOMContentLoaded', () => {

    // Handle Login Fake Routing
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop page from refreshing
            alert("Login successful! Redirecting to Dashboard...");
            window.location.href = 'index.html'; // Jump to landing page
        });
    }

    // Handle Signup Fake Routing
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            alert("Account Created! Please log in.");
            window.location.href = 'login.html'; // Jump back to login
        });
    }

    // Handle Logout in Dashboard
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if(link.innerText.includes('Logout')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                alert("Logging out...");
                window.location.href = 'login.html';
            });
        }
    });
});
