document.addEventListener('DOMContentLoaded', function() {
    var menuLines = document.getElementById('mobile-navbar-lines');
    var closeMenuLines = document.getElementById('close-hbm-wrapper');
    var hamburgerMenu = document.getElementById('hbm-wrapper');

    // Open the hamburger menu
    menuLines.addEventListener('click', function() {
        hamburgerMenu.style.display = 'block';
    });

    // Close the hamburger menu
    closeMenuLines.addEventListener('click', function() {
        hamburgerMenu.style.display = 'none';
    });
});