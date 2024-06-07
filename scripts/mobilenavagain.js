// THIS TOOK SO LONG TO FIGURE OUT

document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-butwo');
    const navbarLinks = document.querySelector('.navbar-link');

    toggleButtons.forEach(function(toggleButton) {
        toggleButton.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    });
});