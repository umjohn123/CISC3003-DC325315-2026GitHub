/**
 * cisc3003-SugEx06-demo.js
 * Shared JavaScript for TechGear Pro e-commerce demo.
 * Includes:
 * - Countdown timer for special offer
 * - Mobile menu toggle
 * - Cart page functionality (quantity update, remove item, totals)
 * - Login/signup form handling (simple demo)
 */

document.addEventListener('DOMContentLoaded', function() {

    // ========== MOBILE MENU TOGGLE ==========
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('change', function() {
            navMenu.classList.toggle('active', this.checked);
        });
    }

    // ========== COUNTDOWN TIMER (for homepage) ==========
    function startCountdown() {
        const daysSpan = document.getElementById('days');
        const hoursSpan = document.getElementById('hours');
        const minutesSpan = document.getElementById('minutes');
        const secondsSpan = document.getElementById('seconds');
        if (!daysSpan) return; // not on homepage

        // Set the target date: 3 days from now (or a fixed future date)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        targetDate.setHours(23, 59, 59, 999); // end of that day

        function updateTimer() {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                daysSpan.textContent = '00';
                hoursSpan.textContent = '00';
                minutesSpan.textContent = '00';
                secondsSpan.textContent = '00';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysSpan.textContent = days < 10 ? '0' + days : days;
            hoursSpan.textContent = hours < 10 ? '0' + hours : hours;
            minutesSpan.textContent = minutes < 10 ? '0' + minutes : minutes;
            secondsSpan.textContent = seconds < 10 ? '0' + seconds : seconds;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }
    startCountdown();

    // ========== CART PAGE FUNCTIONALITY ==========
    const cartBody = document.getElementById('cart-items-body');
    if (cartBody) {
        // Update subtotal and total when quantity changes
        const quantityInputs = document.querySelectorAll('.cart-quantity');
        const updateTotals = () => {
            let subtotal = 0;
            document.querySelectorAll('#cart-items-body tr').forEach(row => {
                const qtyInput = row.querySelector('.cart-quantity');
                if (qtyInput) {
                    const price = parseFloat(qtyInput.dataset.price);
                    const qty = parseInt(qtyInput.value) || 1;
                    const sub = price * qty;
                    const subTd = row.querySelector('.cart-subtotal');
                    if (subTd) {
                        subTd.textContent = '$' + sub.toFixed(2);
                    }
                    subtotal += sub;
                }
            });
            const subtotalSpan = document.getElementById('cart-subtotal');
            const totalSpan = document.getElementById('cart-total');
            if (subtotalSpan) subtotalSpan.textContent = '$' + subtotal.toFixed(2);
            if (totalSpan) totalSpan.textContent = '$' + subtotal.toFixed(2);
        };

        quantityInputs.forEach(input => {
            input.addEventListener('input', updateTotals);
        });

        // Remove item from cart
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const row = this.closest('tr');
                if (row) {
                    row.remove();
                    updateTotals();
                }
            });
        });

        // Apply coupon (demo only – just alert)
        const applyCoupon = document.getElementById('apply-coupon');
        if (applyCoupon) {
            applyCoupon.addEventListener('click', function() {
                const code = document.getElementById('coupon-code').value.trim();
                if (code) {
                    alert('Coupon "' + code + '" applied! (demo – no actual discount)');
                } else {
                    alert('Please enter a coupon code.');
                }
            });
        }

        // Checkout button
        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', function() {
                alert('Thank you for your order! This is a demo, no actual purchase.');
            });
        }

        // Initial totals calculation
        updateTotals();
    }

	// ========== TAB SWITCHING FOR LOGIN/SIGNUP PAGE ==========
	const loginTab = document.getElementById('login-tab');
	const signupTab = document.getElementById('signup-tab');
	const loginForm = document.getElementById('login-form');
	const signupForm = document.getElementById('signup-form');

	if (loginTab && signupTab && loginForm && signupForm) {
	    loginTab.addEventListener('click', function() {
	        loginTab.classList.add('active');
	        signupTab.classList.remove('active');
	        loginForm.classList.add('active');
	        signupForm.classList.remove('active');
	    });

	    signupTab.addEventListener('click', function() {
	        signupTab.classList.add('active');
	        loginTab.classList.remove('active');
	        signupForm.classList.add('active');
	        loginForm.classList.remove('active');
	    });
	}

});