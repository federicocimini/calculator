function add(a,b) {
  return a + b;
}

function substract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return a * b;
}

function divide(a,b) {
  return a / b;
}

function operate(operator,a,b) {
  let result = 0;
  switch (operator) {
    case "add":
      result = add(a, b);
      break;
    case "substract":
      result = substract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
  }
  return result;
}

const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#operate");
const clear = document.querySelector("#clear");
const zero = document.querySelector("#zero");
let displayValue = "";
let functionNumbers = [];
let functionOperators = [];


numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    displayValue = displayValue + number.id;
    display.textContent = displayValue;
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', (e) => {
    if (operator.id != "operate" || operator.id != "clear") {
      functionNumbers.push(parseInt(displayValue));
      functionOperators.push(operator.id);
      displayValue = "";
    }
  });
});

equal.addEventListener('click', (e) => {
  functionNumbers.push(parseInt(displayValue));
  if (functionNumbers.length - functionOperators.length == 1) {
    const result = functionOperators.reduce((accumulator, operation, currentIndex) => {
      return operate(operation, accumulator, functionNumbers[currentIndex + 1]);
    }, functionNumbers[0]);
    (result - Math.floor(result)) != 0 ? display.textContent = result.toFixed(2) : display.textContent = result;
    displayValue = "";
    functionNumbers = [];
    functionOperators = [];
  } else {
    display.textContent = "ERROR";
    displayValue = "";
    functionNumbers = [];
    functionOperators = [];
  }
});

clear.addEventListener('click', (e) => {
  displayValue = "";
  display.textContent = "";
  functionNumbers = [];
  functionOperators = [];
});

zero.addEventListener('click', (e) => {
  if (functionOperators[length] == "divide") {
    display.textContent = "ERROR";
    displayValue = "";
    functionNumbers = [];
    functionOperators = [];
  } 
})

