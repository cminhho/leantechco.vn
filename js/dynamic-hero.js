/* Dynamic Hero Background Effects */
document.addEventListener('DOMContentLoaded', function() {
    // Create and animate particles
    initParticles();
    
    // Add parallax effect to shapes based on mouse movement
    addParallaxEffect();
    
    // Create and manage the animated gradient effect
    initGradientAnimation();
});

function initParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    if (!particlesContainer) return;
    
    // Clear any existing particles
    particlesContainer.innerHTML = '';
    
    // Create 50 particles with random properties
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 1-4px
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation
        const duration = Math.random() * 20 + 10; // 10-30s
        const delay = Math.random() * 10; // 0-10s
        
        particle.style.animation = `floatParticle ${duration}s ${delay}s infinite alternate ease-in-out`;
        
        // Define unique float behavior for each particle
        const keyframes = `
            @keyframes floatParticle {
                0% {
                    transform: translate(0, 0);
                    opacity: ${Math.random() * 0.5 + 0.1};
                }
                50% {
                    opacity: ${Math.random() * 0.3 + 0.3};
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                    opacity: 0;
                }
            }
        `;
        
        // Add keyframes to document
        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);
        
        particlesContainer.appendChild(particle);
    }
}

function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    const shapes = document.querySelectorAll('.dynamic-shape');
    
    if (!hero || !shapes.length) return;
    
    // Parallax effect on mouse move
    hero.addEventListener('mousemove', function(e) {
        const heroRect = hero.getBoundingClientRect();
        
        // Calculate mouse position relative to the center of the hero section
        const centerX = heroRect.width / 2;
        const centerY = heroRect.height / 2;
        const mouseX = e.clientX - heroRect.left;
        const mouseY = e.clientY - heroRect.top;
        
        // Calculate movement factor
        const moveFactorX = (mouseX - centerX) / centerX;
        const moveFactorY = (mouseY - centerY) / centerY;
        
        // Apply parallax effect to each shape with different intensity
        shapes.forEach((shape, index) => {
            const intensity = (index + 1) * 15; // Different intensity for each shape
            const translateX = moveFactorX * intensity;
            const translateY = moveFactorY * intensity;
            
            shape.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
    
    // Reset shapes position when mouse leaves
    hero.addEventListener('mouseleave', function() {
        shapes.forEach(shape => {
            shape.style.transform = 'translate(0, 0)';
        });
    });
}

function initGradientAnimation() {
    const gradient = document.querySelector('.hero-gradient');
    if (!gradient) return;
    
    // Create a smooth, subtle animation for the gradient
    let angle = 0;
    
    function animateGradient() {
        angle = (angle + 0.2) % 360;
        const x = 50 + Math.sin(angle * Math.PI / 180) * 20; // 30-70% horizontal position
        const y = 50 + Math.cos(angle * Math.PI / 180) * 20; // 30-70% vertical position
        
        gradient.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0, 184, 255, 0.25) 0%, rgba(10, 30, 68, 0.1) 40%, transparent 70%)`;
        
        requestAnimationFrame(animateGradient);
    }
    
    animateGradient();
}
