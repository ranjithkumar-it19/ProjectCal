let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        firstOperand = operate(firstOperand, parseFloat(currentInput), operator);
        display.value = firstOperand;
    }
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.value = '';
}

function calculate() {
    if (operator === '' || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result = operate(firstOperand, secondOperand, operator);
    display.value = result;
    currentInput = result.toString();
    operator = '';
    firstOperand = null;
}

function operate(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b !== 0 ? a / b : 'Error';
        default: return b;
    }
}