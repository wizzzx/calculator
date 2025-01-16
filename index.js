const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
const buttonPanel = document.querySelector('#button-panel');
const buttons = document.querySelectorAll('button');

let a
let b
let operator

function renderOnDisplay(value) {
    const input = document.createElement('span');
    input.textContent = value;
    display.appendChild(input);
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.value
        renderOnDisplay(buttonValue);
    })
})



function operate(a, b, operator) {

}



