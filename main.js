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
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity; // based on quantity, total price will be updated
    
    totalPriceElement.textContent = totalPrice.toFixed(2)
}
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);

// Task 4:Handle order submission
placeOrderButton.addEventListener('click', function() { // button to be clicked and order to be placed
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;
    
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct} for a total price: $${totalPrice}`; //  displays product and total price 
});

