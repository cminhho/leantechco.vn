// Extremely simple mobile menu script
document.addEventListener('DOMContentLoaded', function() {
  // Select elements
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const menuNav = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.menu-overlay');
  
  // Toggle menu function
  function toggleMenu() {
    menuNav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  }
  
  // Add event listeners
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }
  
  if (overlay) {
    overlay.addEventListener('click', toggleMenu);
  }
  
  // Close menu when clicking links
  const menuLinks = document.querySelectorAll('.nav-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});
