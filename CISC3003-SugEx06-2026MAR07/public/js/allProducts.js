
        (function() {
            // ---------- Product Database (same as productDetails.html, IDs 1 to 8) ----------
            const products = {
                1: {
                    id: 1,
                    name: "UltraBook Pro Laptop",
                    price: 1299.99,
                    originalPrice: 1499.99,
                    rating: 4.5,
                    reviewCount: 128,
                    description: "14-inch display, 16GB RAM, 512GB SSD, Intel Core i7 processor.",
                    category: "laptops",
                    brand: "TechGear",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/17.jpg"
                },
                2: {
                    id: 2,
                    name: "SmartPhone X Pro",
                    price: 899.99,
                    originalPrice: null,
                    rating: 4.0,
                    reviewCount: 96,
                    description: "6.7-inch OLED, 256GB storage, 48MP camera, 5G enabled.",
                    category: "smartphones",
                    brand: "TechGear",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/18.jpg"
                },
                3: {
                    id: 3,
                    name: "NoiseCancel Pro Headphones",
                    price: 249.99,
                    originalPrice: 299.99,
                    rating: 5.0,
                    reviewCount: 204,
                    description: "Active noise cancellation, 30-hour battery, premium sound quality.",
                    category: "accessories",
                    brand: "AudioTech",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/19.jpg"
                },
                4: {
                    id: 4,
                    name: "FitTrack Smart Watch",
                    price: 199.99,
                    originalPrice: null,
                    rating: 4.5,
                    reviewCount: 156,
                    description: "Health monitoring, GPS, water-resistant, 7-day battery life.",
                    category: "wearables",
                    brand: "FitTrack",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/20.jpg"
                },
                5: {
                    id: 5,
                    name: "GameMaster Pro Laptop",
                    price: 2199.99,
                    originalPrice: null,
                    rating: 4.0,
                    reviewCount: 42,
                    description: "RTX 4070, 32GB RAM, 1TB SSD, 240Hz display for gaming.",
                    category: "laptops",
                    brand: "GameMaster",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/21.jpg"
                },
                6: {
                    id: 6,
                    name: "Tablet Pro Max",
                    price: 1299.99,
                    originalPrice: null,
                    rating: 4.5,
                    reviewCount: 78,
                    description: "12.9-inch display, Apple M2 chip, 1TB storage, pro features.",
                    category: "tablets",
                    brand: "Apple",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/22.jpg"
                },
                7: {
                    id: 7,
                    name: "SoundPods Pro",
                    price: 179.99,
                    originalPrice: null,
                    rating: 5.0,
                    reviewCount: 63,
                    description: "True wireless, noise cancellation, 24-hour battery case.",
                    category: "accessories",
                    brand: "SoundPods",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/23.jpg"
                },
                8: {
                    id: 8,
                    name: "ThunderDrive Portable SSD",
                    price: 249.99,
                    originalPrice: null,
                    rating: 4.5,
                    reviewCount: 91,
                    description: "2TB storage, USB-C, 1050MB/s read speed, rugged design.",
                    category: "accessories",
                    brand: "ThunderDrive",
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/24.jpg"
                }
            };

            // Convert products object to array for easier manipulation
            const productList = Object.values(products);

            // ---------- Filter state ----------
            let currentFilters = {
                category: null,      // null means "All"
                brand: null,
                priceRange: null,    // key like 'under200', '200-500', ...
                ratingRange: null    // key like '5stars', '4starsUp', '3starsUp'
            };
            let currentPage = 1;
            const productsPerPage = 4;

            // ---------- Helper: render star rating (for product cards) ----------
            function renderRatingStars(rating) {
                let stars = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= Math.floor(rating)) {
                        stars += '<i class="fas fa-star"></i>';
                    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                        stars += '<i class="fas fa-star-half-alt"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                }
                return stars;
            }

            // ---------- Helper: check if product matches current filters ----------
            function matchesFilters(product) {
                // Category filter
                if (currentFilters.category && product.category !== currentFilters.category) {
                    return false;
                }
                // Brand filter
                if (currentFilters.brand && product.brand !== currentFilters.brand) {
                    return false;
                }
                // Price range filter
                if (currentFilters.priceRange) {
                    const price = product.price;
                    const range = currentFilters.priceRange;
                    if (range === 'under200' && price >= 200) return false;
                    if (range === '200-500' && (price < 200 || price > 500)) return false;
                    if (range === '500-1000' && (price < 500 || price > 1000)) return false;
                    if (range === '1000-1500' && (price < 1000 || price > 1500)) return false;
                    if (range === 'over1500' && price <= 1500) return false;
                }
                // Rating range filter
                if (currentFilters.ratingRange) {
                    const rating = product.rating;
                    if (currentFilters.ratingRange === '5stars' && rating < 5) return false;  // only exact 5
                    if (currentFilters.ratingRange === '4starsUp' && rating < 4) return false;
                    if (currentFilters.ratingRange === '3starsUp' && rating < 3) return false;
                }
                return true;
            }

            // ---------- Build available filter options based on products ----------
            function buildFilterOptions() {
                const categories = new Set();
                const brands = new Set();
                // Price ranges: we'll check which ranges have at least one product
                const priceRanges = {
                    under200: false,
                    '200-500': false,
                    '500-1000': false,
                    '1000-1500': false,
                    over1500: false
                };
                const ratingRanges = {
                    '5stars': false,
                    '4starsUp': false,
                    '3starsUp': false
                };

                productList.forEach(p => {
                    categories.add(p.category);
                    brands.add(p.brand);
                    
                    // Check price ranges
                    const price = p.price;
                    if (price < 200) priceRanges.under200 = true;
                    else if (price >= 200 && price <= 500) priceRanges['200-500'] = true;
                    else if (price > 500 && price <= 1000) priceRanges['500-1000'] = true;
                    else if (price > 1000 && price <= 1500) priceRanges['1000-1500'] = true;
                    else if (price > 1500) priceRanges.over1500 = true;

                    // Check rating ranges
                    if (p.rating >= 3) ratingRanges['3starsUp'] = true;
                    if (p.rating >= 4) ratingRanges['4starsUp'] = true;
                    if (p.rating === 5) ratingRanges['5stars'] = true;
                });

                return { categories, brands, priceRanges, ratingRanges };
            }

            // ---------- Render filter lists (sidebar) ----------
            function renderFilters() {
                const options = buildFilterOptions();

                // Categories
                const catFilter = document.getElementById('categoryFilter');
                catFilter.innerHTML = '<li><a href="#" data-category="all" class="active">All</a></li>';
                Array.from(options.categories).sort().forEach(cat => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = '#';
                    a.setAttribute('data-category', cat);
                    a.textContent = cat.charAt(0).toUpperCase() + cat.slice(1); // capitalize
                    li.appendChild(a);
                    catFilter.appendChild(li);
                });

                // Brands (with "All" option)
                const brandFilter = document.getElementById('brandFilter');
                brandFilter.innerHTML = '<li><a href="#" data-brand="all">All</a></li>';
                Array.from(options.brands).sort().forEach(brand => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = '#';
                    a.setAttribute('data-brand', brand);
                    a.textContent = brand;
                    li.appendChild(a);
                    brandFilter.appendChild(li);
                });

                // Price ranges (with "All" option)
                const priceFilter = document.getElementById('priceFilter');
                priceFilter.innerHTML = '<li><a href="#" data-price="all">All</a></li>';
                const priceLabels = {
                    under200: 'Under $200',
                    '200-500': '$200 - $500',
                    '500-1000': '$500 - $1000',
                    '1000-1500': '$1000 - $1500',
                    over1500: 'Over $1500'
                };
                Object.keys(options.priceRanges).forEach(key => {
                    if (options.priceRanges[key]) { // only show if at least one product
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = '#';
                        a.setAttribute('data-price', key);
                        a.textContent = priceLabels[key];
                        li.appendChild(a);
                        priceFilter.appendChild(li);
                    }
                });

                // Rating ranges (with "All" option)
                const ratingFilter = document.getElementById('ratingFilter');
                ratingFilter.innerHTML = '<li><a href="#" data-rating="all">All</a></li>';
                const ratingLabels = {
                    '5stars': '5 Stars',
                    '4starsUp': '4 Stars & Up',
                    '3starsUp': '3 Stars & Up'
                };
                Object.keys(options.ratingRanges).forEach(key => {
                    if (options.ratingRanges[key]) {
                        const li = document.createElement('li');
                        const a = document.createElement('a');
                        a.href = '#';
                        a.setAttribute('data-rating', key);
                        a.textContent = ratingLabels[key];
                        li.appendChild(a);
                        ratingFilter.appendChild(li);
                    }
                });

                // Attach click handlers to all filter links
                attachFilterHandlers();
            }

            // ---------- Attach click events to filter links ----------
            function attachFilterHandlers() {
                // Category links
                document.querySelectorAll('#categoryFilter a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const cat = this.dataset.category;
                        currentFilters.category = (cat === 'all') ? null : cat;
                        currentPage = 1; // reset to first page
                        updateActiveClass('categoryFilter', this);
                        renderProducts();
                    });
                });

                // Brand links
                document.querySelectorAll('#brandFilter a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const brand = this.dataset.brand;
                        currentFilters.brand = (brand === 'all') ? null : brand;
                        currentPage = 1;
                        updateActiveClass('brandFilter', this);
                        renderProducts();
                    });
                });

                // Price range links
                document.querySelectorAll('#priceFilter a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const price = this.dataset.price;
                        currentFilters.priceRange = (price === 'all') ? null : price;
                        currentPage = 1;
                        updateActiveClass('priceFilter', this);
                        renderProducts();
                    });
                });

                // Rating links
                document.querySelectorAll('#ratingFilter a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const rating = this.dataset.rating;
                        currentFilters.ratingRange = (rating === 'all') ? null : rating;
                        currentPage = 1;
                        updateActiveClass('ratingFilter', this);
                        renderProducts();
                    });
                });
            }

            // Helper: update active class in a filter list
            function updateActiveClass(listId, activeLink) {
                const links = document.querySelectorAll(`#${listId} a`);
                links.forEach(link => link.classList.remove('active'));
                activeLink.classList.add('active');
            }

            // ---------- Render product grid based on filters and pagination ----------
            function renderProducts() {
                // Filter products
                const filtered = productList.filter(matchesFilters);
                const totalProducts = filtered.length;
                const totalPages = Math.ceil(totalProducts / productsPerPage);
                if (currentPage > totalPages) currentPage = totalPages || 1;

                // Slice for current page
                const start = (currentPage - 1) * productsPerPage;
                const end = start + productsPerPage;
                const pageProducts = filtered.slice(start, end);

                // Generate HTML for product cards
                const grid = document.getElementById('productsGrid');
                grid.innerHTML = '';
                pageProducts.forEach(p => {
                    const card = document.createElement('div');
                    card.className = 'product-card';

                    // Badge (if originalPrice exists -> sale, or "New"? We'll just use originalPrice for sale)
                    let badgeHtml = '';
                    if (p.originalPrice) {
                        badgeHtml = '<span class="product-badge">Sale</span>';
                    } else if (p.id == 2 || p.id == 5 || p.id == 6 || p.id == 7 || p.id == 8) {
                        // For demonstration, add "New" to some (same as original static)
                        if ([2,5,6,7,8].includes(p.id)) {
                            badgeHtml = '<span class="product-badge">New</span>';
                        }
                    }

                    // Price display
                    let priceHtml = `<span class="current-price">$${p.price.toFixed(2)}</span>`;
                    if (p.originalPrice) {
                        priceHtml += `<span class="original-price">$${p.originalPrice.toFixed(2)}</span>`;
                    }

                    // Rating stars
                    const stars = renderRatingStars(p.rating);

                    card.innerHTML = `
                        <div class="product-image">
                            <img src="${p.mainImage}" alt="${p.name}">
                            ${badgeHtml}
                        </div>
                        <div class="product-content">
                            <h3><a href="D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/productDetails.html?id=${p.id}">${p.name}</a></h3>
                            <div class="product-rating">
                                ${stars}
                                <span class="rating-text">(${p.reviewCount})</span>
                            </div>
                            <p class="product-description">${p.description}</p>
                            <div class="product-price">
                                ${priceHtml}
                            </div>
                            <button class="btn-add-to-cart"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                        </div>
                    `;
                    grid.appendChild(card);
                });

                // If no products, show a message
                if (pageProducts.length === 0) {
                    grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No products match your filters.</p>';
                }

                renderPagination(totalPages);
            }

            // ---------- Render pagination controls ----------
            function renderPagination(totalPages) {
                const paginationDiv = document.getElementById('pagination');
                if (totalPages <= 1) {
                    paginationDiv.innerHTML = '';
                    return;
                }

                let html = '';
                // Previous button
                if (currentPage > 1) {
                    html += `<a href="#" data-page="${currentPage-1}"><i class="fas fa-chevron-left"></i></a>`;
                }

                // Page numbers
                for (let i = 1; i <= totalPages; i++) {
                    const activeClass = (i === currentPage) ? 'active' : '';
                    html += `<a href="#" data-page="${i}" class="${activeClass}">${i}</a>`;
                }

                // Next button
                if (currentPage < totalPages) {
                    html += `<a href="#" data-page="${currentPage+1}"><i class="fas fa-chevron-right"></i></a>`;
                }

                paginationDiv.innerHTML = html;

                // Attach click handlers to pagination links
                paginationDiv.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const page = parseInt(this.dataset.page);
                        if (!isNaN(page) && page !== currentPage) {
                            currentPage = page;
                            renderProducts();
                        }
                    });
                });
            }

            // ---------- Initialization ----------
            document.addEventListener('DOMContentLoaded', function() {
                renderFilters();      // Build filter sidebar
                renderProducts();     // Show first page
            });

        })();
