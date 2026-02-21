// Existing JavaScript functionality
        document.addEventListener('DOMContentLoaded', function() {
            // Learning Log Filtering
            const filterBtns = document.querySelectorAll('.filter-btn');
            const logItems = document.querySelectorAll('.log-item');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    logItems.forEach(item => {
                        if (filter === 'all' || item.classList.contains(filter)) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
            
            // Accomplishment Tabs
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));
                    
                    this.classList.add('active');
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Smooth scrolling for demo links
            const demoLinks = document.querySelectorAll('a[href^="#"]');
            demoLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if(this.getAttribute('href') !== '#') {
                        e.preventDefault();
                        const targetId = this.getAttribute('href');
                        const targetSection = document.querySelector(targetId);
                        
                        window.scrollTo({
                            top: targetSection.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });