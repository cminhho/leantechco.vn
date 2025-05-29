// Handle viewport settings for better mobile experience
(function() {
    // Dynamically set viewport scale based on device width
    function setViewportScale() {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        
        if (window.innerWidth < 360) {
            // For very small screens, ensure content fits
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86');
        } else {
            // Default viewport settings
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0');
        }
    }
    
    // Run on page load
    setViewportScale();
    
    // Run when window is resized
    window.addEventListener('resize', setViewportScale);
    
    // Fix for iOS viewport issues (100vh bug)
    function setVhProperty() {
        // Set a CSS variable representing the true viewport height
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    // Run on page load
    setVhProperty();
    
    // Run when window is resized or orientation changes
    window.addEventListener('resize', setVhProperty);
    window.addEventListener('orientationchange', setVhProperty);
})();
