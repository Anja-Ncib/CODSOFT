document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstNumber = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstNumber = '';
                display.textContent = '0';
                adjustFontSize(); // Reset font size
            } else if (value === '=') {
                if (firstNumber !== '' && operator !== '' && currentInput !== '') {
                    currentInput = calculate(firstNumber, operator, currentInput);
                    display.textContent = currentInput;
                    adjustFontSize(); // Adjust font size
                    firstNumber = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (firstNumber === '') {
                    firstNumber = currentInput;
                    operator = value;
                    currentInput = '';
                } else if (currentInput !== '') {
                    firstNumber = calculate(firstNumber, operator, currentInput);
                    operator = value;
                    currentInput = '';
                    display.textContent = firstNumber;
                    adjustFontSize(); // Adjust font size
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
                adjustFontSize(); // Adjust font size
            }
        });
    });

    function calculate(num1, operator, num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return '';
        }
    }

    function adjustFontSize() {
        const length = display.textContent.length;
        if (length > 10) {
            display.style.fontSize = '1.5em';
        } else if (length > 7) {
            display.style.fontSize = '2em';
        } else {
            display.style.fontSize = '2.5em';
        }
    }
});
