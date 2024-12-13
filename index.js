const calculator = document.getElementById('calculator');
const buttons = document.querySelectorAll('button')
const display = document.querySelector('.display');

function add(a, b) {
    return a + b

}
function subtract(a, b) {
    return a - b

}
function multiply(a, b) {
    return a * b

}
function divide(a, b) {
    return a / b

}

let a
let b
let operator

buttons.forEach((button) => {
    const value = button.getAttribute('value');
    const numericValue = Number(value);

    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 9) {
        button.addEventListener('click', () => {
            a = numericValue;
            const displayedNumber = document.createElement('span')
            displayedNumber.textContent = a;
            display.appendChild(displayedNumber)
        });
    }
});


