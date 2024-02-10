let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function appendOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    if (displayValue !== '') {
        let result;
        try {
            result = eval(displayValue);
            document.getElementById('display').value = result;
            displayValue = result.toString();
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});
