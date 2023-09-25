let displayValue = '0';

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}
const MAX_DISPLAY_LENGTH = 40; // Define the maximum length of the display content

function appendToDisplay(value) {
  if (displayValue.length < MAX_DISPLAY_LENGTH) {
    if (displayValue === '0' && value !== '.') {
      displayValue = value;
    } else {
      displayValue += value;
    }
    updateDisplay();
  }
}
updateDisplay();