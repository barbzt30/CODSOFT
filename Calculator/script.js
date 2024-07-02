function updateDisplay(value) {
    const display = document.querySelector('.calculator-screen');
    display.value = value;
}

function clearDisplay() {
    updateDisplay('');
}

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default: 
            return b;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let currentInput = '';
    let equation = '';
    let operator = null;
    let firstOperand = null;
    let secondOperand = null;
    let result = firstOperand + secondOperand;

    const keys = document.querySelector('.calculator-keys');
    keys.addEventListener('click', (event) => {
        const target = event.target;

        if (! target.matches('button')) {
            return;
        }
        const value = target.value;

        if (target.classList.contains('operator')) {
    if (operator && firstOperand !== null){
        secondOperand = parseFloat(currentInput);
        firstOperand = calculate(firstOperand, secondOperand, operator);
        equation += `${operator} ${secondOperand}`;
       

        updateDisplay(equation);
    } else {
        firstOperand = parseFloat(currentInput);
        equation = currentInput;
        
    }
     operator = value;
     currentInput = '';
     equation += `${operator}`;

   } else if (target.classList.contains('equal-sign')) {
        if (operator && firstOperand !== null){
            secondOperand = parseFloat(currentInput);
            const result = calculate(firstOperand, secondOperand, operator);
             equation += ` = ${result}`;
 
        }
         
       updateDisplay(equation);
        firstOperand = result;
        operator = null;
        equation = result.toString();
        currentInput = '';
       
    } else if (target.classList.contains('all-clear')) {
        currentInput = '';
        equation = '';
        firstOperand = null;
        secondOperand = null;
        operator = null;
        clearDisplay();
    } else {
        currentInput += value;
        if (operator) {
            equation = `${firstOperand} ${operator} ${currentInput}`;
        } else {
            equation = currentInput;
        }

        updateDisplay(equation);
    }
});
});