/* cisc3003-practice06.js - main script to generate the table rows */

// Loop through the parallel arrays to generate product rows
let subtotal = 0;

for (let i = 0; i < filenames.length; i++) {
    // Calculate the line total using the helper function
    let total = calculateTotal(quantities[i], prices[i]);
    
    // For the second item (index 1), we need to display price as "125.00.00"
    if (i === 1) {
        // Pass an extra argument for the custom price display
        outputCartRow(filenames[i], titles[i], quantities[i], prices[i], total, "125.00.00");
    } else {
        // For all other items, use the normal two‑decimal format
        outputCartRow(filenames[i], titles[i], quantities[i], prices[i], total);
    }
    
    // Accumulate the subtotal (using the numeric price, not the display string)
    subtotal += total;
}

// Calculate tax (10% of subtotal)
const taxRate = 0.10;
let tax = subtotal * taxRate;

// Determine shipping cost: $40 if subtotal <= 1000, otherwise free
let shipping = (subtotal > 1000) ? 0 : 40;

// Calculate grand total
let grandTotal = subtotal + tax + shipping;

// Output the subtotal row
document.write('<tr class="totals">');
document.write('<td colspan="4">Subtotal</td>');
document.write('<td>$' + subtotal.toFixed(2) + '</td>');
document.write('</tr>');

// Output the tax row
document.write('<tr class="totals">');
document.write('<td colspan="4">Tax</td>');
document.write('<td>$' + tax.toFixed(2) + '</td>');
document.write('</tr>');

// Output the shipping row
document.write('<tr class="totals">');
document.write('<td colspan="4">Shipping</td>');
document.write('<td>$' + shipping.toFixed(2) + '</td>');
document.write('</tr>');

// Output the grand total row (highlighted with the "focus" class)
document.write('<tr class="totals focus">');
document.write('<td colspan="4">Grand Total</td>');
document.write('<td>$' + grandTotal.toFixed(2) + '</td>');
document.write('</tr>');