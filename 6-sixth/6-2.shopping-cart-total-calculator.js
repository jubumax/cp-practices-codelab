/*
 * `Shopping Cart Total Calculator`
 * 
 * Write a function calculateCartTotal that calculates the final total cost of a shopping cart.
 * 
 * Each item in the items array is an object with:
 * price (number): the unit price
 * quantity (number): the number of units
 * discount (number): the percentage discount on that item (e.g., 10 means 10% off)
 * 
 * The function also accepts a taxRate (number), representing the 
 * tax percentage (e.g., 8 means 8% sales tax) applied to the combined total after item discounts.
 * Return the final total rounded to 2 decimal places.
 */


function calculateCartTotal(items, taxRate) {
    let subtotal = 0;

    for (const item of items) {
        const { price, quantity, discount } = item;
        subtotal += price * quantity * (1 - discount / 100);
    }

    const total = subtotal * (1 + taxRate / 100);

    return Math.round((total + Number.EPSILON) * 100) / 100;
}


console.log(calculateCartTotal([
    { price: 100, quantity: 2, discount: 10 },
    { price: 50, quantity: 1, discount: 0 },
], 8));                                                                                     // 248.4 → 100*2*0.9 = 180, + 50 = 230, 230 * 1.08 = 248.4
console.log(calculateCartTotal([], 8));                                                     // 0
console.log(calculateCartTotal([{ price: 19.99, quantity: 3, discount: 0 }], 0));           // 59.97
console.log(calculateCartTotal([{ price: 10, quantity: 1, discount: 100 }], 10));           // 0
console.log(calculateCartTotal([{ price: 10, quantity: 0, discount: 0 }], 10));             // 0