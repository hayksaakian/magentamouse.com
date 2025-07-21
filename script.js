// Navigation and animation effects
document.addEventListener('DOMContentLoaded', function() {
    // Remove smooth scrolling - buttons will just be regular buttons

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(139, 92, 246, 0.98)';
        } else {
            navbar.style.background = 'rgba(139, 92, 246, 0.95)';
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and founder cards
    const animatedElements = document.querySelectorAll('.service-card, .founder-card, .testimonial');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Simple form handling (placeholder for contact form)
function handleContactForm() {
    // This would typically send data to a backend service
    // For a static site, you could integrate with services like Formspree, Netlify Forms, etc.
    alert('Thanks for your interest! Please email us at hello@magentamouse.com');
}