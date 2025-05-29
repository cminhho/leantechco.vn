/* Animated Hero Background Script */
document.addEventListener('DOMContentLoaded', function() {
    // Hero Animation
    const shapes = document.querySelectorAll('.shape');
    const heroSection = document.querySelector('.hero');
    
    // Function to create a parallax effect on shapes based on mouse movement
    function moveShapes(e) {
        const heroRect = heroSection.getBoundingClientRect();
        const mouseX = e.clientX - heroRect.left;
        const mouseY = e.clientY - heroRect.top;
        
        const centerX = heroRect.width / 2;
        const centerY = heroRect.height / 2;
        
        const moveX = (mouseX - centerX) / 50;
        const moveY = (mouseY - centerY) / 50;
        
        shapes.forEach((shape, index) => {
            const factor = (index + 1) * 0.3;
            const transX = moveX * factor;
            const transY = moveY * factor;
            
            shape.style.transform = `translate(${transX}px, ${transY}px)`;
        });
    }
    
    // Add mouse move listener for parallax effect
    heroSection.addEventListener('mousemove', moveShapes);
    
    // Create dynamic particles in the background
    const particleCount = 50;
    const particlesContainer = document.querySelector('.hero-particles');
    
    // Clear any existing particles
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position, size and animation delay
            const size = Math.random() * 3 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 5;
            const duration = Math.random() * 20 + 10;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
});
