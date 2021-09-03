// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк:

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const createList = item => {
//   const itemList = document.createElement('li');
//   itemList.textContent = item;
//   return itemList;
// };

// const ingredientList = ingredients.map(item => createList(item));

// const showIngredients = document.querySelector('#ingredients');
// showIngredients.append(...ingredientList);

// console.log(showIngredients);

const createList = arr => {
  arr.forEach(item => {
    const listItems = document.createElement('li');
    listItems.textContent = item;
    const ingredientList = document.querySelector('#ingredients');
    ingredientList.append(listItems);
  });
};

createList(ingredients);

// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
