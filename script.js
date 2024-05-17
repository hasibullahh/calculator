let currentNumber = "";
let previousNumber = "";
let operator = "";
let memory = 0; // Added for memory functionality

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("display").value = currentNumber;
}

function clearLast() {
  if (currentNumber !== "") {
    currentNumber = currentNumber.slice(0, -1);
  }
  document.getElementById("display").value = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = "";
}

function add() {
  operator = "+";
  previousNumber = currentNumber;
  currentNumber = "";
}

function subtract() {
  operator = "-";
  previousNumber = currentNumber;
  currentNumber = "";
}

function multiply() {
  operator = "*";
  previousNumber = currentNumber;
  currentNumber = "";
}

function divide() {
  operator = "/";
  previousNumber = currentNumber;
  currentNumber = "";
}

function calculate() {
  if (currentNumber === "" || operator === "") {
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      if (currentNumber === "0") {
        alert("Division by zero is not allowed!");
        return;
      }
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = currentNumber;
}

function toggleSign() {
  if (currentNumber !== "") {
    currentNumber = parseFloat(currentNumber) * -1;
    document.getElementById("display").value = currentNumber;
  }
}

function calculatePercent() {
  if (currentNumber === "" || operator === "") {
    return;
  }

  let result;
  if (operator === "") {
    result = parseFloat(currentNumber) / 100;
  } else {
    result = parseFloat(previousNumber) * (parseFloat(currentNumber) / 100);
  }

  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("display").value = currentNumber;
}

function deleteMemory() {
  memory = 0;
  alert("Memory cleared!");
}

function recallMemory() {
  if (memory !== 0) {
    currentNumber = memory.toString();
    document.getElementById("display").value = currentNumber;
  } else {
    alert("No value stored in memory!");
  }
}

function addToMemory() {
  if (currentNumber !== "") {
    memory += parseFloat(currentNumber);
    alert("Value added to memory!");
  } else {
    alert("No value to add to memory!");
  }
}

function subtractFromMemory() {
  if (currentNumber !== "") {
    memory -= parseFloat(currentNumber);
    alert("Value subtracted from memory!");
  } else {
    alert("No value to subtract from memory!");
  }
}
