// JavaScript for e-commerce functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle mobile menu
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            navMenu.style.display = 'flex';
        } else {
            navMenu.style.display = 'none';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && window.innerWidth <= 768) {
            menuToggle.checked = false;
            navMenu.style.display = 'none';
        }
    });
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 3; // Starting with 3 items
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Animation effect
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.style.backgroundColor = '#27ae60';
            
            // Update cart count
            cartItems++;
            cartCount.textContent = cartItems;
            cartCount.classList.add('pulse');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                this.style.backgroundColor = '';
            }, 2000);
            
            // Remove pulse animation after 1 second
            setTimeout(() => {
                cartCount.classList.remove('pulse');
            }, 1000);
            
            // Show notification
            showNotification('Product added to cart!');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu after clicking
                if(window.innerWidth <= 768) {
                    menuToggle.checked = false;
                    navMenu.style.display = 'none';
                }
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        const newsletterInput = newsletterForm.querySelector('input[type="email"]');
        const newsletterButton = newsletterForm.querySelector('button');
        
        newsletterButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if(newsletterInput.value && isValidEmail(newsletterInput.value)) {
                newsletterInput.value = '';
                showNotification('Thank you for subscribing!');
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });
    }
    
    // Testimonial carousel (simple version)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    // Function to rotate testimonials
    function rotateTestimonials() {
        testimonialCards.forEach(card => card.style.opacity = '0.7');
        testimonialCards[currentTestimonial].style.opacity = '1';
        
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    }
    
    // Start rotation if on testimonials section
    if(testimonialCards.length > 0) {
        // Initial setup
        testimonialCards.forEach((card, index) => {
            card.style.transition = 'opacity 0.5s ease';
            card.style.opacity = index === 0 ? '1' : '0.7';
        });
        
        // Auto rotate every 5 seconds
        setInterval(rotateTestimonials, 5000);
    }
    
    // Countdown Timer for Special Offer
    // Set the target date for the offer expiration (March 31, 2026 23:59:59)
    const targetDate = new Date('March 31, 2026 23:59:59').getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = targetDate - now;

        // Time calculations for days, hours, minutes, seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the results in the corresponding HTML elements
        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-timer .timer-display').innerHTML = '<p class="expired">Offer Expired</p>';
        }
    }, 1000);
    
    // Helper function to validate email
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Helper function to show notifications
    function showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            animation: slideIn 0.3s ease;
        `;
        
        // Add keyframe animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        // Add to document
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Product rating hover effect
    const productRatings = document.querySelectorAll('.product-rating .fa-star');
    productRatings.forEach(star => {
        star.addEventListener('mouseover', function() {
            const ratingValue = this.getAttribute('data-rating');
            if(ratingValue) {
                const stars = this.parentElement.querySelectorAll('.fa-star');
                stars.forEach((s, index) => {
                    if(index < ratingValue) {
                        s.style.color = '#f39c12';
                    }
                });
            }
        });
        
        star.addEventListener('mouseout', function() {
            const stars = this.parentElement.querySelectorAll('.fa-star');
            stars.forEach(s => {
                s.style.color = '';
            });
        });
    });
});