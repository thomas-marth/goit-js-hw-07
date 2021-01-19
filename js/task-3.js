// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

/* <ul id="gallery"></ul> */

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.getElementById('gallery');

const createImg = ({ url, alt }) => {
  const listItem = document.createElement('li');
  const img = document.createElement('img');
  img.setAttribute('src', url);
  img.setAttribute('alt', alt);
  img.setAttribute('width', '360');
  img.setAttribute('height', '240');
  listItem.appendChild(img);
  return listItem;
};

const imagesList = images.map(image => createImg(image));

const list = document.querySelector('#gallery');
list.append(...imagesList);
