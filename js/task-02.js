// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById('ingredients');

ingredients.forEach((ingridient) => {
  const li = document.createElement('li')
  li.textContent = ingridient
  li.classList.add('item')
  ul.appendChild(li);
});