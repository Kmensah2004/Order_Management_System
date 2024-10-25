// Task 2: Add Event Listener for Product Selection
//Define Product variables
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

productSelector.addEventListener('change', calculateTotalPrice);
quantityInput.addEventListener('input', calculateTotalPrice);

// Task 3: Calculate Total Price 

function calculateTotalPrice() { 
    const productPrice = (productSelector.value);
    const quantity = (quantityInput.value);
    const totalPrice = productPrice * quantity; // based on quantity, total price will be updated
    
    totalPriceElement.textContent = totalPrice
}

