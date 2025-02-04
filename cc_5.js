// Task 1- Customer Profile
const customer = { name: "John", age: 25, email: "john.doe@email.com" };
console.log('Name: ${customer.name}');
console.log('Age: ${customer.age}');
console.log('Email: ${customer.email}');

// Task 2- Order Details
const order = {
    orderID: 12345,
    totalAmount: 19.99,
    status: "pending"
    displayOrder: function() {
        console.log('Order ID: ${this.orderID}');
        console.log('Total Amount: ${this.totalAmount}');
        console.log('Status: ${this.status}');
    }
}
order.displayOrder();

// Task 3- Shopping Cart
let cartItems = ["Apple", "Orange", "Mango"];
cartItems.push("Banana");
cartItems.pop();
cartItems.unshift("Strawberry");
cartItems.shift();
console.log(cartItems);

// Task 4 - Price Adjustments
let prices = [19.99, 5.99, 9.99];
let discountedPrices = prices.map(price => price * 0.5);
console.log(discountedPrices);

// Task 5 - Product Availability
let inventory = [5, 0, 12, 8, 0];
let availableProducts = inventory.filter(quanity => quanity > 0); 
console.log(availableProducts);

// Task 6 - Revenue Calculation
let sales = [1200, 300, 500, 800];
let totalRevenue = sales.reduce((acc, sale) => acc + sale, 0);
console.log(totalRevenue);

// Task 7 - Customer Search
let customers = ["John", "Jane", "Alice", "Bob"];
let foundCustomer = customers.find(customer => customer === "Alice");
console.log(foundCustomer);

// Task 8 - Tax Calculation
function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log('Tax on $${amount} at ${taxRate * 100}%: $${tax}');
    return tax;
}
calculateTax(100, 0.1);

// Task 9 - Discount Application
const applyDiscount = function(amount, discount) {
    let discountedPrice = price - (price * discount);
    console.log('Discounted price: $${discountedPrice}');
    return discountedPrice;
};
applyDiscount(100, 0.2);

// Task 10 - Loyalty Points
const calculatePoints = purchaseAmount => {
    let points = Math.floor(purchaseAmount / 10);
    console.log('Points earned: ${points}');
    return points;
};
calculatePoints(100);