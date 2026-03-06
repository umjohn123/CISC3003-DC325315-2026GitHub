/* functions.js - helper functions for the shopping cart */

/**
 * Calculates the total price for a line item.
 * @param {number} quantity - The number of items.
 * @param {number} price - The unit price.
 * @returns {number} The product of quantity and price.
 */
function calculateTotal(quantity, price) {
    return quantity * price;
}

/**
 * Calculates the tax amount based on subtotal and tax rate.
 * @param {number} subtotal - The subtotal before tax.
 * @param {number} rate - The tax rate (e.g., 0.10 for 10%).
 * @returns {number} The tax amount.
 */
function calculateTax(subtotal, rate) {
    return subtotal * rate;
}

/**
 * Calculates the shipping cost based on subtotal and a free shipping threshold.
 * @param {number} subtotal - The subtotal before shipping.
 * @param {number} threshold - The amount above which shipping is free.
 * @returns {number} The shipping cost (40 if subtotal <= threshold, otherwise 0).
 */
function calculateShipping(subtotal, threshold) {
    return subtotal > threshold ? 0 : 40;
}

/**
 * Calculates the grand total by summing subtotal, tax, and shipping.
 * @param {number} subtotal - The subtotal.
 * @param {number} tax - The tax amount.
 * @param {number} shipping - The shipping cost.
 * @returns {number} The grand total.
 */
function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}

/**
 * Formats a number as US currency (with two decimals and a leading $).
 * @param {number} num - The number to format.
 * @returns {string} The formatted currency string (e.g., "$125.00").
 */
function outputCurrency(num) {
    return "$" + num.toFixed(2);
}

/**
 * Outputs a single table row for a cart item using document.write.
 * @param {string} file - The image file name (e.g., "106020.jpg").
 * @param {string} title - The product title.
 * @param {number} quantity - The quantity ordered.
 * @param {number} price - The unit price (numeric, used for total calculation).
 * @param {number} total - The line total (quantity * price).
 * @param {string} [priceDisplay] - Optional custom string for the Price column.
 *                                  If not provided, price is formatted using outputCurrency.
 */
function outputCartRow(file, title, quantity, price, total, priceDisplay) {
    document.write('<tr>');
    // Image cell: build the image path using the filename (relative path)
    document.write('<td><img src="D:/cisc3003/CISC3003-dc325315-2026/CISC3003-Practice06-2026MAR06/images/' + file + '"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td>' + quantity + '</td>');
    
    // Price cell: use custom display if provided, otherwise format the numeric price with outputCurrency
    if (priceDisplay !== undefined) {
        document.write('<td>$' + priceDisplay + '</td>');
    } else {
        document.write('<td>' + outputCurrency(price) + '</td>');
    }
    
    // Amount cell (line total) – formatted using outputCurrency
    document.write('<td>' + outputCurrency(total) + '</td>');
    document.write('</tr>');
}