let displayValue = "";
let operator = "";
let firstOperand = null;

function appendToResult(value) {
  displayValue += value;
  updateDisplay();
}

function operate(selectedOperator) {
  operator = selectedOperator;
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
    displayValue = "";
  }
}

function clearResult() {
  displayValue = "";
  operator = "";
  firstOperand = null;
  updateDisplay();
}

function calculate() {
  if (operator && displayValue !== "") {
    const secondOperand = parseFloat(displayValue);
    if (operator === "/" && secondOperand === 0) {
      displayValue = "Division by Zero Error";
    } else {
      switch (operator) {
        case "+":
          displayValue = (firstOperand + secondOperand).toString();
          break;
        case "-":
          displayValue = (firstOperand - secondOperand).toString();
          break;
        case "*":
          displayValue = (firstOperand * secondOperand).toString();
          break;
        case "/":
          displayValue = (firstOperand / secondOperand).toString();
          break;
        default:
          break;
      }
    }
    operator = "";
    firstOperand = null;
    updateDisplay();
  }
}

function deleteNum() {
  displayValue = displayValue.slice(0, -1); // Removes the last character from displayValue
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("calculate").value = displayValue;
}




