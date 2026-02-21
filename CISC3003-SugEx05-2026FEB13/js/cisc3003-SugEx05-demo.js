// JavaScript for e-commerce functionality (SugEx05)
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('change', function() {
            if (this.checked) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        });
        
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.navbar') && window.innerWidth <= 768) {
                menuToggle.checked = false;
                navMenu.style.display = 'none';
            }
        });
    }
    
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart, .btn-add-to-cart-large');
    const cartCount = document.querySelector('.cart-count');
    let cartItems = 3; // Starting with 3 items
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Animation effect
            const originalHTML = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check"></i> Added!';
            this.style.backgroundColor = '#27ae60';
            
            // Update cart count
            if (cartCount) {
                cartItems++;
                cartCount.textContent = cartItems;
                cartCount.classList.add('pulse');
            }
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalHTML;
                this.style.backgroundColor = '';
            }, 2000);
            
            if (cartCount) {
                setTimeout(() => {
                    cartCount.classList.remove('pulse');
                }, 1000);
            }
            
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
                if(window.innerWidth <= 768 && menuToggle) {
                    menuToggle.checked = false;
                    if (navMenu) navMenu.style.display = 'none';
                }
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        const newsletterInput = newsletterForm.querySelector('input[type="email"]');
        const newsletterButton = newsletterForm.querySelector('button');
        
        if (newsletterButton) {
            newsletterButton.addEventListener('click', function(e) {
                e.preventDefault();
                
                if(newsletterInput && newsletterInput.value && isValidEmail(newsletterInput.value)) {
                    newsletterInput.value = '';
                    showNotification('Thank you for subscribing!');
                } else {
                    showNotification('Please enter a valid email address.', 'error');
                }
            });
        }
    }
    
    // Testimonial carousel (simple version)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    let currentTestimonial = 0;
    
    function rotateTestimonials() {
        if (testimonialCards.length > 0) {
            testimonialCards.forEach(card => card.style.opacity = '0.7');
            testimonialCards[currentTestimonial].style.opacity = '1';
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        }
    }
    
    if(testimonialCards.length > 0) {
        testimonialCards.forEach((card, index) => {
            card.style.transition = 'opacity 0.5s ease';
            card.style.opacity = index === 0 ? '1' : '0.7';
        });
        setInterval(rotateTestimonials, 5000);
    }
    
    // Countdown Timer for Special Offer
    const targetDate = new Date('March 31, 2026 23:59:59').getTime();
    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        if (minutesEl) minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        if (secondsEl) secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            const timerDisplay = document.querySelector('.countdown-timer .timer-display');
            if (timerDisplay) timerDisplay.innerHTML = '<p class="expired">Offer Expired</p>';
        }
    }, 1000);
    
    // Helper functions
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        `;
        
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
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.3); }
                100% { transform: scale(1); }
            }
            .pulse { animation: pulse 0.5s ease-in-out; }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
});

// Simple image change function for product gallery
        function changeImage(src) {
            document.getElementById('mainProductImage').src = src;
            // Update active thumbnail
            const thumbnails = document.querySelectorAll('.thumbnail-images img');
            thumbnails.forEach(img => img.classList.remove('active'));
            event.target.classList.add('active');
        }

        // Tabs functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabHeaders = document.querySelectorAll('.tab-header');
            const tabContents = document.querySelectorAll('.tab-content');

            tabHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    tabHeaders.forEach(h => h.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));

                    this.classList.add('active');
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        });