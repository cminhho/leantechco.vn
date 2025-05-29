// Improved Responsive Scripts

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu handling
  const menuButton = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  // Toggle menu function
  function toggleMenu() {
    navMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Update ARIA attributes
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
  }
  
  // Add event listeners
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', toggleMenu);
  }
  
  if (menuOverlay) {
    menuOverlay.addEventListener('click', toggleMenu);
  }
  
  // Close menu when clicking links
  const menuLinks = document.querySelectorAll('.nav-menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Close menu with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      toggleMenu();
    }
  });
  
  // Sticky header
  const header = document.querySelector('.header');
  let scrollPosition = window.scrollY;
  
  function updateHeaderClass() {
    scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  
  // Run on load and scroll
  updateHeaderClass();
  window.addEventListener('scroll', updateHeaderClass);
  
  // Add scroll reveal animations
  const animateElements = document.querySelectorAll('.solution-card, .product-card, .testimonial-item, .section-header');
  
  // Only use animations on desktop
  if (window.innerWidth > 768) {
    animateElements.forEach((element, index) => {
      // Add animation classes
      element.classList.add('fade-in-up');
      
      // Stagger the animations
      setTimeout(() => {
        element.classList.add('active');
      }, 100 * index);
    });
  }
  
  // Fix for 100vh issue on mobile browsers
  function setVhProperty() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Run on load and resize
  setVhProperty();
  window.addEventListener('resize', setVhProperty);
  
  // Improve performance on mobile by disabling heavy animations
  function optimizeForMobile() {
    if (window.innerWidth <= 768) {
      document.body.classList.add('mobile-optimized');
    } else {
      document.body.classList.remove('mobile-optimized');
    }
  }
  
  // Run on load and resize
  optimizeForMobile();
  window.addEventListener('resize', optimizeForMobile);
  
  // Fix for scrolling to anchors with fixed header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});
