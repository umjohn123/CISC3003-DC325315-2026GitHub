(function() {
            // ---------- Product Database (IDs 1 to 8) ----------
            const products = {
                1: {
                    name: "UltraBook Pro Laptop",
                    price: 1299.99,
                    originalPrice: 1499.99,
                    rating: 4.5,
                    reviewCount: 128,
                    description: "14-inch display, 16GB RAM, 512GB SSD, Intel Core i7 processor. Perfect for professionals and creatives.",
                    longDescription: "<p>The UltraBook Pro Laptop is designed for those who demand both performance and portability. With its sleek aluminum body, it weighs just 2.8 pounds and is only 0.6 inches thin, making it perfect for professionals on the go.</p><p>Powered by the latest Intel Core i7 processor and 16GB of RAM, it handles multitasking with ease. The 14-inch Retina display delivers stunning visuals, while the 512GB SSD ensures fast boot and load times. Whether you're editing videos, coding, or working with large datasets, the UltraBook Pro delivers exceptional performance.</p>",
                    specs: [
                        "<strong>Processor:</strong> Intel Core i7-1260P (12th Gen)",
                        "<strong>RAM:</strong> 16GB LPDDR5",
                        "<strong>Storage:</strong> 512GB PCIe NVMe SSD",
                        "<strong>Display:</strong> 14-inch 2560x1600 Retina display",
                        "<strong>Graphics:</strong> Intel Iris Xe Graphics",
                        "<strong>Battery:</strong> Up to 15 hours",
                        "<strong>Ports:</strong> 2x Thunderbolt 4, 1x USB-A, HDMI",
                        "<strong>Weight:</strong> 2.8 lbs"
                    ],
                    reviews: [
                        { author: "Sarah Johnson", rating: 5, comment: "This laptop is a powerhouse! Perfect for software development and light video editing. Highly recommended." },
                        { author: "Michael Chen", rating: 4.5, comment: "Great build quality and battery life. The display is gorgeous. Only downside is the lack of more USB ports." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/17.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/38.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/36.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/37.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/39.jpg"],
                    category: "laptops",
                    brand: "TechGear",
                    sku: "TG-UBP-001",
                    // Custom options for this product
                    memoryOptions: ["16GB RAM", "32GB RAM (+$200)", "64GB RAM (+$400)"],
                    storageOptions: ["512GB SSD", "1TB SSD (+$150)", "2TB SSD (+$300)"],
                    colorOptions: ["Silver", "Space Gray", "Gold"]
                },
                2: {
                    name: "SmartPhone X Pro",
                    price: 899.99,
                    originalPrice: null,
                    rating: 4.0,
                    reviewCount: 96,
                    description: "6.7-inch OLED, 256GB storage, 48MP camera, 5G enabled. The ultimate smartphone experience.",
                    longDescription: "<p>The SmartPhone X Pro combines cutting-edge technology with elegant design. Its 6.7-inch OLED display delivers vibrant colors and deep blacks, while the 48MP camera system captures stunning photos and 4K video.</p><p>With 256GB of storage and 5G connectivity, you'll have all the space and speed you need. The powerful processor ensures smooth multitasking and gaming.</p>",
                    specs: [
                        "<strong>Display:</strong> 6.7-inch OLED, 120Hz",
                        "<strong>Processor:</strong> A16 Bionic chip",
                        "<strong>RAM:</strong> 8GB",
                        "<strong>Storage:</strong> 256GB",
                        "<strong>Camera:</strong> 48MP main + 12MP ultra-wide",
                        "<strong>Battery:</strong> 4500mAh, fast charging",
                        "<strong>OS:</strong> iOS 17",
                        "<strong>5G:</strong> Yes"
                    ],
                    reviews: [
                        { author: "Emma Wilson", rating: 4, comment: "Great phone, amazing camera and battery life. A bit expensive but worth it." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/18.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/18.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/40.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/41.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/42.jpg"],
                    category: "smartphones",
                    brand: "TechGear",
                    sku: "TG-SPX-002",
                    memoryOptions: ["8GB"],
                    storageOptions: ["128GB", "256GB(+$150)"], 
                    colorOptions: ["Nebula Black", "Starry Silver", "Tuscany Brown"]
                },
                3: {
                    name: "NoiseCancel Pro Headphones",
                    price: 249.99,
                    originalPrice: 299.99,
                    rating: 5.0,
                    reviewCount: 204,
                    description: "Active noise cancellation, 30-hour battery, premium sound quality. Immerse yourself in music.",
                    longDescription: "<p>Experience true wireless freedom with the NoiseCancel Pro Headphones. Advanced active noise cancellation blocks out the world, while the 30-hour battery keeps you listening all week.</p><p>The premium sound quality is tuned by audio experts, delivering deep bass and crystal-clear highs. Comfortable over-ear design makes them perfect for long listening sessions.</p>",
                    specs: [
                        "<strong>Noise Cancellation:</strong> Active hybrid",
                        "<strong>Battery Life:</strong> 30 hours",
                        "<strong>Driver:</strong> 40mm dynamic",
                        "<strong>Connectivity:</strong> Bluetooth 5.2",
                        "<strong>Weight:</strong> 250g",
                        "<strong>Charging:</strong> USB-C fast charge",
                        "<strong>Includes:</strong> Carrying case, audio cable"
                    ],
                    reviews: [
                        { author: "David Park", rating: 5, comment: "Best headphones I've ever owned. The noise cancellation is incredible." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/19.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/19.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/43.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/44.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/45.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/46.jpg"],
                    category: "accessories",
                    brand: "AudioTech",
                    sku: "TG-NCP-003",
                    memoryOptions: [], // not applicable
                    storageOptions: [],
                    colorOptions: ["Black", "Silver", "Midnight Green"]
                },
                4: {
                    name: "FitTrack Smart Watch",
                    price: 199.99,
                    originalPrice: null,
                    rating: 4.5,
                    reviewCount: 156,
                    description: "Health monitoring, GPS, water-resistant, 7-day battery life. Your fitness companion.",
                    longDescription: "<p>The FitTrack Smart Watch helps you stay on top of your health. Monitor heart rate, track sleep, and log workouts with precision. Built-in GPS maps your runs without needing your phone.</p><p>With 7-day battery life and water resistance up to 50m, it's perfect for all-day wear, even while swimming.</p>",
                    specs: [
                        "<strong>Display:</strong> 1.4-inch AMOLED",
                        "<strong>Battery:</strong> 7 days",
                        "<strong>Sensors:</strong> Heart rate, SpO2, accelerometer",
                        "<strong>GPS:</strong> Built-in",
                        "<strong>Water Resistance:</strong> 5 ATM",
                        "<strong>Compatibility:</strong> iOS & Android"
                    ],
                    reviews: [
                        { author: "Lisa Wong", rating: 4.5, comment: "Great smartwatch for the price. Accurate tracking and long battery." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/20.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/20.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/47.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/48.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/49.jpg"],
                    category: "wearables",
                    brand: "FitTrack",
                    sku: "TG-FTW-004",
                    memoryOptions: [], // not applicable
                    storageOptions: [],
                    colorOptions: ["Black", "Rose Gold", "Navy Blue"]
                },
                5: {
                    name: "GameMaster Pro Laptop",
                    price: 2199.99,
                    originalPrice: null,
                    rating: 4.0,
                    reviewCount: 42,
                    description: "RTX 4070, 32GB RAM, 1TB SSD, 240Hz display for gaming. Dominate the competition.",
                    longDescription: "<p>The GameMaster Pro Laptop is built for gamers who demand the best. With an NVIDIA RTX 4070 graphics card and 32GB of RAM, you can play the latest titles at max settings.</p><p>The 240Hz display ensures buttery‑smooth motion, while the 1TB SSD provides ample storage for your game library.</p>",
                    specs: [
                        "<strong>Processor:</strong> Intel Core i9-13900H",
                        "<strong>Graphics:</strong> NVIDIA RTX 4070 8GB",
                        "<strong>RAM:</strong> 32GB DDR5",
                        "<strong>Storage:</strong> 1TB NVMe SSD",
                        "<strong>Display:</strong> 16-inch 240Hz QHD",
                        "<strong>Battery:</strong> 90Wh",
                        "<strong>Weight:</strong> 5.5 lbs"
                    ],
                    reviews: [
                        { author: "Alex Chen", rating: 4, comment: "Beast of a laptop. Runs everything smoothly, but fans can get loud." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/21.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/21.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/50.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/51.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/52.jpg"],
                    category: "laptops",
                    brand: "GameMaster",
                    sku: "TG-GMP-005",
                    memoryOptions: ["32GB RAM", "64GB RAM (+$400)"],
                    storageOptions: ["1TB SSD", "2TB SSD (+$300)"],
                    colorOptions: ["Natural silver"]
                },
                6: {
                    name: "Tablet Pro Max",
                    price: 1299.99,
                    originalPrice: null,
                    rating: 4.5,
                    reviewCount: 78,
                    description: "12.9-inch display, Apple M2 chip, 1TB storage, pro features. Unleash your creativity.",
                    longDescription: "<p>The Tablet Pro Max is the ultimate tool for creatives. The 12.9-inch Liquid Retina XDR display brings your content to life, while the M2 chip handles demanding tasks like video editing and 3D design.</p><p>With 1TB of storage and all‑day battery life, you can take your work anywhere.</p>",
                    specs: [
                        "<strong>Display:</strong> 12.9-inch Liquid Retina XDR",
                        "<strong>Chip:</strong> Apple M2",
                        "<strong>RAM:</strong> 6GB",
                        "<strong>Storage:</strong> 256GB",
                        "<strong>Camera:</strong> 12MP wide + 10MP ultra-wide",
                        "<strong>Battery:</strong> Up to 10 hours",
                        "<strong>OS:</strong> iPadOS 17"
                    ],
                    reviews: [
                        { author: "Sophia Lee", rating: 5, comment: "Perfect for drawing and note‑taking. The display is amazing." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/22.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/22.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/53.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/59.jpg","D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/60.jpg"],
                    category: "tablets",
                    brand: "Apple",
                    sku: "TG-TPM-006",
                    memoryOptions: ["6GB RAM"],
                    storageOptions: ["256 GB"],
                    // Size option only for this product
                    sizeOptions: ["8 in"],
                    colorOptions: ["Green", "Grey","Purple","Red"]
                },
                7: {
                    name: "SoundPods Pro",
                    price: 179.99,
                    originalPrice: null,
                    rating: 5.0,
                    reviewCount: 63,
                    description: "True wireless, noise cancellation, 24-hour battery case. Pure audio freedom.",
                    longDescription: "<p>SoundPods Pro earbuds deliver premium sound in a compact form. Active noise cancellation blocks out distractions, while the transparency mode lets you hear your surroundings when needed.</p><p>The charging case provides an additional 24 hours of battery life, and wireless charging makes refueling effortless.</p>",
                    specs: [
                        "<strong>Driver:</strong> Custom 11mm",
                        "<strong>Noise Cancellation:</strong> Yes",
                        "<strong>Battery (earbuds):</strong> 6 hours",
                        "<strong>Battery (case):</strong> 24 hours",
                        "<strong>Charging:</strong> USB-C, wireless",
                        "<strong>Water Resistance:</strong> IPX4",
                        "<strong>Connectivity:</strong> Bluetooth 5.3"
                    ],
                    reviews: [
                        { author: "James Brown", rating: 5, comment: "Excellent sound and fit. The noise cancellation is top‑notch." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/23.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/23.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/54.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/55.jpg"],
                    category: "accessories",
                    brand: "SoundPods",
                    sku: "TG-SPP-007",
                    memoryOptions: [],
                    storageOptions: [],
                    colorOptions: ["Beige", "Black", "White"]
                },
                8: {
                    name: "ThunderDrive Portable SSD",
                    price: 249.99,
                    originalPrice: null,
                    rating: 4.5,
                    reviewCount: 91,
                    description: "2TB storage, USB-C, 1050MB/s read speed, rugged design. Fast and durable storage.",
                    longDescription: "<p>The ThunderDrive Portable SSD offers lightning‑fast transfers in a rugged, pocket‑sized design. With read speeds up to 1050MB/s, you can move large files in seconds.</p><p>The shock‑resistant casing protects your data from drops, and the USB‑C connection works with modern laptops and tablets.</p>",
                    specs: [
                        "<strong>Capacity:</strong> 2TB",
                        "<strong>Interface:</strong> USB 3.2 Gen 2 (USB‑C)",
                        "<strong>Read Speed:</strong> Up to 1050MB/s",
                        "<strong>Write Speed:</strong> Up to 1000MB/s",
                        "<strong>Durability:</strong> Shock‑resistant, IP55",
                        "<strong>Dimensions:</strong> 4.5 x 2.8 x 0.4 inches",
                        "<strong>Weight:</strong> 2.1 oz"
                    ],
                    reviews: [
                        { author: "Olivia Wang", rating: 4.5, comment: "Super fast and reliable. Perfect for backing up my photo library." }
                    ],
                    mainImage: "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/24.jpg",
                    thumbnails: ["D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/24.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/56.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/57.jpg", "D:/cisc3003-2026/cisc3003-dc325315-2026/CISC3003-SugEx06-2026MAR07/public/images/58.jpg"],
                    category: "accessories",
                    brand: "ThunderDrive",
                    sku: "TG-TDS-008",
                    memoryOptions: [], // not applicable
                    storageOptions: ["2TB", "4TB (+$200)", "8TB (+$400)"],
                    colorOptions: ["Black"]
                }
            };

            // ---------- Helper function to get URL parameter ----------
            function getUrlParameter(name) {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(name);
            }

            // ---------- Function to render star rating ----------
            function renderRating(rating) {
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

            // ---------- Helper to generate options HTML from an array ----------
            function generateOptionsHTML(optionsArray, defaultValue) {
                if (!optionsArray || optionsArray.length === 0) {
                    return '<option>N/A</option>';
                }
                let html = '';
                optionsArray.forEach(opt => {
                    const selected = (opt === defaultValue) ? ' selected' : '';
                    html += `<option${selected}>${opt}</option>`;
                });
                return html;
            }

            // ---------- Main function to update page with product data ----------
            function loadProductDetails() {
                const productId = getUrlParameter('id') || '1'; // default to id=1 if missing
                const product = products[productId];
                if (!product) {
                    // If product not found, redirect to home
                    window.location.href = 'cisc3003-SugEx06-demo.html';
                    return;
                }

                // Update breadcrumb
                document.getElementById('breadcrumb-product').textContent = product.name;

                // Update main image
                const mainImage = document.getElementById('mainProductImage');
                mainImage.src = product.mainImage;
                mainImage.alt = product.name;

                // Populate thumbnails
                const thumbnailContainer = document.getElementById('thumbnailContainer');
                thumbnailContainer.innerHTML = ''; // clear existing
                product.thumbnails.forEach((thumb, index) => {
                    const img = document.createElement('img');
                    img.src = thumb;
                    img.alt = `Thumbnail ${index + 1}`;
                    img.className = index === 0 ? 'active' : '';
                    img.onclick = function() {
                        document.getElementById('mainProductImage').src = thumb;
                        document.querySelectorAll('.thumbnail-images img').forEach(el => el.classList.remove('active'));
                        this.classList.add('active');
                    };
                    thumbnailContainer.appendChild(img);
                });

                // Prepare rating stars
                const ratingStars = renderRating(product.rating);

                // Generate option dropdowns only if they exist and have values
                let memoryHTML = '', storageHTML = '', colorHTML = '', sizeHTML = '';

                if (product.memoryOptions && product.memoryOptions.length > 0) {
                    memoryHTML = `
                        <div class="option-group">
                            <label for="memory">Memory:</label>
                            <select id="memory">
                                ${generateOptionsHTML(product.memoryOptions, product.memoryOptions[0])}
                            </select>
                        </div>
                    `;
                }

                if (product.storageOptions && product.storageOptions.length > 0) {
                    storageHTML = `
                        <div class="option-group">
                            <label for="storage">Storage:</label>
                            <select id="storage">
                                ${generateOptionsHTML(product.storageOptions, product.storageOptions[0])}
                            </select>
                        </div>
                    `;
                }

                if (product.colorOptions && product.colorOptions.length > 0) {
                    colorHTML = `
                        <div class="option-group">
                            <label for="color">Color:</label>
                            <select id="color">
                                ${generateOptionsHTML(product.colorOptions, product.colorOptions[0])}
                            </select>
                        </div>
                    `;
                }

                // NEW: Size option (only for products that define sizeOptions)
                if (product.sizeOptions && product.sizeOptions.length > 0) {
                    sizeHTML = `
                        <div class="option-group">
                            <label for="size">Size:</label>
                            <select id="size">
                                ${generateOptionsHTML(product.sizeOptions, product.sizeOptions[0])}
                            </select>
                        </div>
                    `;
                }

                // Populate product info container
                const infoContainer = document.getElementById('productInfoContainer');
                infoContainer.innerHTML = `
                    <h1>${product.name}</h1>
                    <div class="product-rating-large">
                        ${ratingStars}
                        <span class="rating-count">(${product.reviewCount} customer reviews)</span>
                    </div>
                    <div class="product-price-large">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                        ${product.originalPrice ? `<span class="savings">Save $${(product.originalPrice - product.price).toFixed(2)}</span>` : ''}
                    </div>
                    <p class="product-availability"><i class="fas fa-check-circle"></i> In Stock</p>
                    <p class="product-short-description">${product.description}</p>

                    <!-- Product Options (dynamically generated) -->
                    <div class="product-options">
                        ${memoryHTML}
                        ${storageHTML}
                        ${colorHTML}
                        ${sizeHTML}   <!-- Size option inserted here (only for product 6) -->
                    </div>

                    <!-- Quantity and Add to Cart -->
                    <div class="purchase-section">
                        <div class="quantity-selector">
                            <label for="quantity">Qty:</label>
                            <input type="number" id="quantity" value="1" min="1">
                        </div>
                        <button class="btn-add-to-cart-large"><i class="fas fa-cart-plus"></i> Add to Cart</button>
                    </div>

                    <!-- Additional meta info -->
                    <div class="product-meta">
                        <p><strong>Category:</strong> <a href="allProducts.html?category=${product.category}">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</a></p>
                        <p><strong>Brand:</strong> <a href="#">${product.brand}</a></p>
                        <p><strong>SKU:</strong> ${product.sku}</p>
                    </div>
                `;

                // Populate tabs
                document.getElementById('description').innerHTML = product.longDescription;

                let specsHtml = '<ul>';
                product.specs.forEach(spec => {
                    specsHtml += `<li>${spec}</li>`;
                });
                specsHtml += '</ul>';
                document.getElementById('specs').innerHTML = specsHtml;

                let reviewsHtml = '';
                product.reviews.forEach(rev => {
                    const revStars = renderRating(rev.rating);
                    reviewsHtml += `
                        <div class="customer-review">
                            <div class="review-header">
                                <strong>${rev.author}</strong>
                                <div class="review-rating">${revStars}</div>
                            </div>
                            <p>"${rev.comment}"</p>
                        </div>
                    `;
                });
                document.getElementById('reviews').innerHTML = reviewsHtml;

                // Populate related products (exclude current product) with ratings
                const relatedGrid = document.getElementById('relatedProductsGrid');
                relatedGrid.innerHTML = '';
                const otherIds = Object.keys(products).filter(id => id !== productId).slice(0, 3); // show up to 3
                otherIds.forEach(id => {
                    const p = products[id];
                    const card = document.createElement('div');
                    card.className = 'product-card';
                    card.innerHTML = `
                        <a href="productDetails.html?id=${id}" style="text-decoration: none; color: inherit;">
                            <div class="product-image">
                                <img src="${p.mainImage}" alt="${p.name}">
                            </div>
                            <div class="product-content">
                                <h4>${p.name}</h4>
                                <!-- Rating stars and count added to match allProducts.html -->
                                <div class="product-rating">
                                    ${renderRating(p.rating)}
                                    <span class="rating-text">(${p.reviewCount})</span>
                                </div>
                                <div class="product-price">
                                    <span class="current-price">$${p.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </a>
                    `;
                    relatedGrid.appendChild(card);
                });
            }

            // ---------- Tab switching functionality ----------
            function initTabs() {
                const tabHeaders = document.querySelectorAll('.tab-header');
                const tabContents = document.querySelectorAll('.tab-content');

                tabHeaders.forEach(header => {
                    header.addEventListener('click', function() {
                        // Remove active class from all headers and contents
                        tabHeaders.forEach(h => h.classList.remove('active'));
                        tabContents.forEach(c => c.classList.remove('active'));

                        // Add active class to clicked header
                        this.classList.add('active');

                        // Get the target tab id from data-tab attribute
                        const targetId = this.getAttribute('data-tab');
                        const targetContent = document.getElementById(targetId);
                        if (targetContent) {
                            targetContent.classList.add('active');
                        }
                    });
                });
            }

            // Execute after DOM is fully loaded
            document.addEventListener('DOMContentLoaded', function() {
                loadProductDetails(); // Load product data first
                initTabs();            // Then initialize tab switching
            });
        })();