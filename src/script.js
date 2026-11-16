
const firstInput = document.getElementById('firstNumber');
const secondInput = document.getElementById('secondNumber');
const resultElement = document.getElementById('result');
const messageElement = document.getElementById('message');

// Отримання та перевірка чисел
function getNumbers() {
  const firstValue = firstInput.value.trim();
  const secondValue = secondInput.value.trim();

  if (firstValue === '' || secondValue === '') {
    showError('Будь ласка, заповніть обидва поля.');
    return null;
  }

  const firstNumber = Number(firstValue);
  const secondNumber = Number(secondValue);

  if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
    showError('Помилка! Введіть коректні числа.');
    return null;
  }

  messageElement.textContent = '';

  return {
    firstNumber: firstNumber,
    secondNumber: secondNumber
  };
}

// Повідомлення про помилку
function showError(message) {
  resultElement.textContent = '—';
  messageElement.textContent = message;
}

// Виведення результату
function showResult(value) {
  resultElement.textContent = value;
  messageElement.textContent = '';
}

// Додавання
function addNumbers() {
  const numbers = getNumbers();

  if (numbers === null) {
    return;
  }

  const result = numbers.firstNumber + numbers.secondNumber;
  showResult(result);
}

// Віднімання
function subtractNumbers() {
  const numbers = getNumbers();

  if (numbers === null) {
    return;
  }

  const result = numbers.firstNumber - numbers.secondNumber;
  showResult(result);
}

// Множення
function multiplyNumbers() {
  const numbers = getNumbers();

  if (numbers === null) {
    return;
  }

  const result = numbers.firstNumber * numbers.secondNumber;
  showResult(result);
}

// Ділення
function divideNumbers() {
  const numbers = getNumbers();

  if (numbers === null) {
    return;
  }

  if (numbers.secondNumber === 0) {
    showError('Помилка! На нуль ділити не можна.');
    return;
  }

  let result = numbers.firstNumber / numbers.secondNumber;

  if (!Number.isInteger(result)) {
    result = Number(result.toFixed(2));
  }

  showResult(result);
}

function clearCalculator() {
  firstInput.value = '';
  secondInput.value = '';
  resultElement.textContent = '—';
  messageElement.textContent = '';
  firstInput.focus();
}

document.getElementById('add').addEventListener('click', addNumbers);
document.getElementById('subtract').addEventListener('click', subtractNumbers);
document.getElementById('multiply').addEventListener('click', multiplyNumbers);
document.getElementById('divide').addEventListener('click', divideNumbers);
document.getElementById('clear').addEventListener('click', clearCalculator);
