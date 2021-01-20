// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр
// amount - число.
// Функция создает столько div, сколько указано в amount
// и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего
// на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const createBoxRef = document.querySelector('[data-action="render"]');
const deleteBoxRef = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let box = boxes.childElementCount;
  const allBoxes = [];
  for (box; box < amount; box += 1) {
    createBox();
    allBoxes.push(box);
  }
}

function createBox() {
  let box = boxes.childElementCount;
  function getRandomColor() {
    const getRandomNumber = () => parseInt(Math.random() * 255);
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    const rgb = `${r},${g},${b}`;
    return rgb;
  }
  const div = document.createElement('div');
  div.style.width = `${30 + box * 10}px`;
  div.style.height = `${30 + box * 10}px`;
  div.style.backgroundColor = `rgb(${getRandomColor()})`;
  boxes.appendChild(div);
}

function destroyBoxes() {
  while (boxes.hasChildNodes()) {
    boxes.removeChild(boxes.lastChild);
  }
}

createBoxRef.addEventListener('click', () => {
  createBoxes(document.querySelector('#controls').firstElementChild.value);
});

deleteBoxRef.addEventListener('click', () => {
  destroyBoxes();
});
