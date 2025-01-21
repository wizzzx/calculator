const calculator = document.querySelector('#calculator');
const display = document.querySelector('#display');
const buttonPanel = document.querySelector('#button-panel');
const buttons = document.querySelectorAll('button');
const equals = document.querySelector('#equals');
const del = document.querySelector('#del');
const reset = document.querySelector('#reset');
const displayResult = document.querySelector('#result');

let a = ''
let b = ''
let operator

function operate(a, b, operator) {
    if (operator === '+') {
        return a + b
    } else if (operator === '-') {
        return a - b
    } else if (operator === '*') {
        return a * b
    } else if (operator === '/') {
        return a / b
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.value
        if (!['+', '-', '*', '/'].includes(buttonValue) && !operator) {
            a = a + buttonValue
            const firstInput = document.createElement('p')
            firstInput.textContent = buttonValue
            display.appendChild(firstInput)
            a = Number(a)
            console.log('a=', a, typeof a)
            return a
        } else if (!['+', '-', '*', '/'].includes(buttonValue) && operator) {
            b = b + buttonValue
            const secondInput = document.createElement('p')
            secondInput.textContent = buttonValue
            display.appendChild(secondInput)
            b = Number(b)
            console.log('b=', b)
            return b
        } else if (['+', '-', '*', '/'].includes(buttonValue) && !operator) {
            operator = buttonValue
            const operatorInput = document.createElement('p')
            operatorInput.textContent = operator
            display.appendChild(operatorInput)
            console.log(operator)
        } else if (displayResult.textContent !== '' && operator && a !== '' && b !== '') {
            a = Number(displayResult.textContent)
            b = ''
            operator = ''
            display.innerHTML = ''
            displayResult.innerHTML = ''
            const firstInput = document.createElement('p')
            firstInput.textContent = a
            display.appendChild(firstInput)
            return a
        } else {
            buttons.forEach((button) => {
                button.addEventListener('click', (e) => {

                })
            })
        }
    })
})

equals.addEventListener('click', (e) => {
    const result = operate(a, b, operator)
    const resultInput = document.createElement("p")
    resultInput.textContent = result
    displayResult.appendChild(resultInput)
    console.log(result)
})

reset.addEventListener('click', (e) => {
    a = ''
    b = ''
    operator = ''
    display.innerHTML = ''
    displayResult.innerHTML = ''
})

del.addEventListener('click', (e) => {
    if (a !== '' && !operator) {

    }
})


