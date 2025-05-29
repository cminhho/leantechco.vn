// Mobile Menu JS - Simplified Version

document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile menu script loaded');
    
    // Get elements
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    // Check if elements exist
    console.log('Menu toggle exists:', !!mobileMenuToggle);
    console.log('Nav menu exists:', !!navMenu);
    console.log('Menu overlay exists:', !!menuOverlay);
    
    // Function to toggle menu
    function toggleMenu() {
        console.log('Toggle menu called');
        
        // Toggle navigation
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        
        // Toggle overlay
        if (menuOverlay) {
            menuOverlay.classList.toggle('active');
        }
        
        // Toggle body scroll lock
        document.body.classList.toggle('menu-open');
        
        // Toggle ARIA attributes
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        
        console.log('Menu is now:', navMenu.classList.contains('active') ? 'active' : 'inactive');
    }
    
    // Toggle menu when button is clicked
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu button clicked');
            toggleMenu();
        });
    }
    
    // Close menu when overlay is clicked
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            console.log('Overlay clicked');
            toggleMenu();
        });
    }
    
    // Close menu when pressing escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            console.log('Escape key pressed');
            toggleMenu();
        }
    });
    
    // Close menu when clicking a menu link (for single page navigation)
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Nav link clicked');
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

