document.addEventListener('DOMContentLoaded', function() {
    // Quote Form Functionality
    const quoteButton = document.getElementById('get-quote-btn');
    const serviceCheckboxes = document.querySelectorAll('.service-checkbox');
    const feedbackDiv = document.getElementById('quote-feedback');
    
    if (quoteButton) {
        quoteButton.addEventListener('click', function() {
            const selectedServices = Array.from(serviceCheckboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.value);
            
            // Reset feedback
            feedbackDiv.textContent = '';
            feedbackDiv.className = 'mt-4 text-center feedback-message';
            
            if (selectedServices.length === 0) {
                // Error state
                feedbackDiv.textContent = 'Please select at least one service';
                feedbackDiv.classList.add('error', 'show');
            } else {
                // Success state
                feedbackDiv.textContent = `Thank you for selecting ${selectedServices.join(' and ')}! We'll contact you shortly with your customized quote.`;
                feedbackDiv.classList.add('success', 'show');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 70;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (navbarToggler && navbarNav) {
        navbarToggler.addEventListener('click', function() {
            navbarNav.classList.toggle('show');
        });
    }
});
