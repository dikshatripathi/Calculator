let display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let prevInput = null;
let ans = null;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (currentInput === "0" || currentInput === 0) {
        currentInput = value;
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentInput = "0";
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput.length === 0) {
        currentInput = "0";
    }
    updateDisplay();
}

function clearAll() {
    currentInput = "0";
    operator = null;
    prevInput = null;
    ans = null;
    updateDisplay();
}

function useAns() {
    if (ans !== null) {
        currentInput = ans.toString();
        updateDisplay();
    }
}

function calculateResult() {
    if (operator && prevInput !== null) {
        let result;
        const prevValue = parseFloat(prevInput);
        const currentValue = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prevValue + currentValue;
                break;
            case '-':
                result = prevValue - currentValue;
                break;
            case '*':
                result = prevValue * currentValue;
                break;
            case '/':
                result = prevValue / currentValue;
                break;
            default:
                return;
        }

        ans = result;
        currentInput = result.toString();
        operator = null;
        prevInput = null;
        updateDisplay();
    }
}

function setOperator(value) {
    if (operator !== null) {
        calculateResult();
    }
    operator = value;
    prevInput = currentInput;
    currentInput = "0";
}
