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

let a = ''
let b = ''
let operator = ''

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.value



    })
});




