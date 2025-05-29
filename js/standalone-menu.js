// Standalone menu script - completely independent from other scripts

(function() {
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    console.log('[Standalone Menu] Initializing...');
    
    // Find the necessary elements
    var menuButton = document.querySelector('.mobile-menu-toggle');
    var navMenu = document.querySelector('.nav-menu');
    var menuOverlay = document.querySelector('.menu-overlay');
    
    // Create menu overlay if it doesn't exist
    if (!menuOverlay) {
      console.log('[Standalone Menu] Creating menu overlay element');
      menuOverlay = document.createElement('div');
      menuOverlay.className = 'menu-overlay';
      document.body.insertBefore(menuOverlay, document.body.firstChild);
    }
    
    // Log element states
    console.log('[Standalone Menu] Menu button found:', !!menuButton);
    console.log('[Standalone Menu] Nav menu found:', !!navMenu);
    console.log('[Standalone Menu] Menu overlay found:', !!menuOverlay);
    
    // Function to toggle the menu
    function toggleMenu(e) {
      if (e) e.preventDefault();
      
      console.log('[Standalone Menu] Toggle menu called');
      
      // Toggle nav menu
      if (navMenu) {
        navMenu.classList.toggle('active');
        console.log('[Standalone Menu] Nav menu is now:', navMenu.classList.contains('active') ? 'active' : 'inactive');
      }
      
      // Toggle overlay
      if (menuOverlay) {
        menuOverlay.classList.toggle('active');
      }
      
      // Toggle button state
      if (menuButton) {
        menuButton.classList.toggle('active');
        
        // Change icon from bars to X when menu is open
        var icon = menuButton.querySelector('i');
        if (icon) {
          if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
          } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
          }
        }
        
        // Toggle aria-expanded attribute
        var isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
      }
      
      // Toggle body class to prevent scrolling
      document.body.classList.toggle('menu-open');
    }
    
    // Add click event listener to menu button
    if (menuButton) {
      // Remove any existing event listeners first
      var newButton = menuButton.cloneNode(true);
      if (menuButton.parentNode) {
        menuButton.parentNode.replaceChild(newButton, menuButton);
      }
      menuButton = newButton;
      
      // Add new event listener
      menuButton.addEventListener('click', toggleMenu);
      console.log('[Standalone Menu] Added click event to menu button');
    }
    
    // Add click event listener to overlay
    if (menuOverlay) {
      // Remove any existing event listeners first
      var newOverlay = menuOverlay.cloneNode(true);
      if (menuOverlay.parentNode) {
        menuOverlay.parentNode.replaceChild(newOverlay, menuOverlay);
      }
      menuOverlay = newOverlay;
      
      // Add new event listener
      menuOverlay.addEventListener('click', toggleMenu);
      console.log('[Standalone Menu] Added click event to overlay');
    }
    
    // Close menu when clicking on menu links
    var menuLinks = document.querySelectorAll('.nav-menu a');
    if (menuLinks) {
      menuLinks.forEach(function(link) {
        // Remove any existing event listeners first
        var newLink = link.cloneNode(true);
        if (link.parentNode) {
          link.parentNode.replaceChild(newLink, link);
        }
        
        // Add new event listener
        newLink.addEventListener('click', function() {
          if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains('active')) {
            console.log('[Standalone Menu] Link clicked, closing menu');
            toggleMenu();
          }
        });
      });
      console.log('[Standalone Menu] Added click events to menu links');
    }
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        console.log('[Standalone Menu] Escape key pressed, closing menu');
        toggleMenu();
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
        // Reset menu when switching to desktop
        navMenu.classList.remove('active');
        if (menuOverlay) {
          menuOverlay.classList.remove('active');
        }
        if (menuButton) {
          menuButton.classList.remove('active');
          menuButton.setAttribute('aria-expanded', 'false');
        }
        document.body.classList.remove('menu-open');
        console.log('[Standalone Menu] Resized to desktop, closing mobile menu');
      }
    });
    
    console.log('[Standalone Menu] Initialization complete');
  });
})();
