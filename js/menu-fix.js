// Menu Fix JavaScript
// This script handles the mobile menu functionality

document.addEventListener('DOMContentLoaded', function() {
  console.log('Menu fix script loaded');
  
  // Define elements
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  // Log debug info
  console.log('Menu button found:', !!menuButton);
  console.log('Nav menu found:', !!navMenu);
  console.log('Menu overlay found:', !!menuOverlay);
  
  // Mobile check
  const isMobile = window.innerWidth <= 768;
  console.log('Is mobile device:', isMobile);
  
  // Toggle menu function
  function toggleMenu(event) {
    if (event) {
      event.preventDefault();
    }
    
    console.log('Toggling menu');
    
    // Toggle active class on nav menu
    if (navMenu) {
      navMenu.classList.toggle('active');
      console.log('Nav menu active:', navMenu.classList.contains('active'));
    }
    
    // Toggle active class on menu button
    if (menuButton) {
      menuButton.classList.toggle('active');
    }
    
    // Toggle active class on overlay
    if (menuOverlay) {
      menuOverlay.classList.toggle('active');
    }
    
    // Toggle body class
    document.body.classList.toggle('menu-open');
  }
  
  // Add event listener to menu button
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
    console.log('Added click event to menu button');
  }
  
  // Add event listener to overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', toggleMenu);
    console.log('Added click event to overlay');
  }
  
  // Add event listeners to menu links
  const menuLinks = document.querySelectorAll('.nav-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (isMobile && navMenu.classList.contains('active')) {
        console.log('Menu link clicked, closing menu');
        toggleMenu();
      }
    });
  });
  
  // Close menu with escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      console.log('Escape key pressed, closing menu');
      toggleMenu();
    }
  });
  
  // Ensure proper initialization on page load
  if (navMenu) {
    // Make sure menu is closed on load
    navMenu.classList.remove('active');
    console.log('Menu initialized in closed state');
  }
  
  // Handle resize events
  window.addEventListener('resize', function() {
    const isMobileNow = window.innerWidth <= 768;
    
    // Close menu when resizing from mobile to desktop
    if (!isMobileNow && navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      document.body.classList.remove('menu-open');
      if (menuOverlay) {
        menuOverlay.classList.remove('active');
      }
      console.log('Resized to desktop, closing mobile menu');
    }
  });
});
