let currentCurrency = 'usd';
let currentUnit = 'kg';

function updateCurrency() {
    const currencySelector = document.getElementById('currency-selector');
    currentCurrency = currencySelector.value;
    updatePrices();
}

function updateUnit() {
    const unitSelector = document.getElementById('unit-selector');
    currentUnit = unitSelector.value;
    updateWeights();
}

function updatePrices() {
    const priceElements = document.querySelectorAll('.price');
    priceElements.forEach((priceElement) => {
        priceElement.textContent = formatPrice(parseFloat(priceElement.dataset[currentCurrency]));
    });
}

function updateWeights() {
    const weightElements = document.querySelectorAll('.weight');
    weightElements.forEach((weightElement) => {
        weightElement.textContent = formatWeight(parseFloat(weightElement.dataset[currentUnit]));
    });
}

function formatPrice(price) {
    return currentCurrency === 'usd' ? `$${price.toFixed(2)}` :
        currentCurrency === 'eur' ? `€${price.toFixed(2)}` :
        currentCurrency === 'inr' ? `₹${price.toFixed(2)}` :
        `$${price.toFixed(2)}`; // Default to USD
}

function formatWeight(weight) {
    return currentUnit === 'kg' ? `${weight} kg` :
        currentUnit === 'lb' ? `${weight} lb` :
        currentUnit === 'g' ? `${weight} g` :
        `${weight} oz`; // Default to ounces
}

// Initialize prices and weights on page load
document.addEventListener('DOMContentLoaded', () => {
    updatePrices();
    updateWeights();
});
