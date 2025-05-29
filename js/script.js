/* JavaScript for consistent theme handling */
document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', 
                menuToggle.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
            );
        });
    }
    
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    // Product tabs functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle the clicked FAQ item
            item.classList.toggle('active');
        });
    });
    
    // Chat widget functionality
    const chatButton = document.querySelector('.chat-button');
    const chatPopup = document.querySelector('.chat-popup');
    const closeChat = document.querySelector('.close-chat');
    
    if (chatButton && chatPopup && closeChat) {
        chatButton.addEventListener('click', () => {
            chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
        });
        
        closeChat.addEventListener('click', () => {
            chatPopup.style.display = 'none';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
                
                // Scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission handling
    const contactForm = document.getElementById('consultationForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form submission logic here
            // For now, just show a success message
            alert('Cảm ơn bạn đã liên hệ với chúng tôi! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            contactForm.reset();
        });
    }

    // Activate the first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
});
