document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickInsideHamburger = hamburger.contains(event.target);
        const isNavbarActive = navbar.classList.contains('active');

        if (!isClickInsideNavbar && !isClickInsideHamburger && isNavbarActive) {
            navbar.classList.remove('active');
        }
    });
    
    // Hide hamburger menu when other sections are clicked
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });
});
