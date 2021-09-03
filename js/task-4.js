// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения
// значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementButton = document.querySelector(
  '#counter button[data-action="decrement"]',
);
const incrementButton = document.querySelector(
  '#counter button[data-action="increment"]',
);
const value = document.querySelector('#value');

// const subtract = (a, b) => a - b;
// const add = (a, b) => a + b;
// let currentValue = 0;

// decrementButton.addEventListener('click', () => {
//   value.textContent = subtract(currentValue, 1);
//   currentValue -= 1;
// });

// incrementButton.addEventListener('click', () => {
//   value.textContent = add(currentValue, 1);
//   currentValue += 1;
// });

let currentValue = 0;

const increment = () => {
  value.textContent = currentValue += 1;
  return currentValue;
};
const decrement = () => {
  value.textContent = currentValue -= 1;
  return currentValue;
};

incrementButton.addEventListener('click', increment);

decrementButton.addEventListener('click', decrement);
