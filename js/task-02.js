const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById('ingredients');

const liArray = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

ul.append(...liArray);

/*
1. Оголошення масиву `ingredients` зі списком інгредієнтів.
2. Отримання посилання на елемент списку `<ul>` з допомогою `getElementById()`.
3. Використання методу масиву `map()` для перетворення масиву `ingredients` 
в новий масив `liArray`, який містить елементи `<li>`.
4. Для кожного інгредієнта виконуються наступні дії:
   - Створення нового елемента `<li>` з допомогою `createElement()`.
   - Встановлення текстового вмісту елемента `<li>` на значення поточного інгредієнта.
   - Додавання класу "item" до елемента `<li>` з допомогою `classList.add()`.
   - Повернення створеного елемента `<li>`.
5. Використання оператора `spread` (`...`) для розгортання масиву `liArray` 
та додавання всіх елементів одразу до списку `<ul>` з допомогою методу `append()`.

Таким чином, кожен інгредієнт обробляється окремо за допомогою методу `map()`, 
що дозволяє створити новий масив `<li>`. Після цього за допомогою оператора `spread`
 всі елементи масиву додаються одним кроком до списку `<ul>`.
*/