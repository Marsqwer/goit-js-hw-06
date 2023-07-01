const categoriesList = document.querySelector('#categories');
const items = categoriesList.children;
console.log("Кількість категорій:", items.length);

for (let i = 0; i < items.length; i++) {
  const categoryName = items[i].querySelector('h2').textContent;
  const itemLength = items[i].querySelectorAll('li').length;

  console.log("Категорія:", categoryName);
  console.log("Кількість елементів:", itemLength);
}
/*
1. Знаходження елемента з id "categories":
   ```javascript
   const categoriesList = document.querySelector('#categories');
   ```
   - Використовуємо `document.querySelector()` для отримання посилання на елемент з id "categories" з DOM.

2. Отримання дочірніх елементів:
   ```javascript
   const items = categoriesList.children;
   ```
   - Використовуємо властивість `children` для отримання масиву дочірніх елементів `categoriesList`.

3. Виведення кількості категорій:
   ```javascript
   console.log("Кількість категорій:", items.length);
   ```
   - Використовуємо `items.length` для визначення кількості елементів у масиві `items`.
   - Виводимо результат у консоль за допомогою `console.log()`.

4. Ітерація через кожен елемент:
   ```javascript
   for (let i = 0; i < items.length; i++) {
     // Код внутрішньої частини циклу
   }
   ```
   - Використовуємо цикл `for` для ітерації крізь кожен елемент у масиві `items`.

5. Отримання назви категорії:
   ```javascript
   const categoryName = items[i].querySelector('h2').textContent;
   ```
   - Використовуємо `items[i]` для отримання поточного елемента в циклі.
   - Використовуємо `querySelector('h2')` для знаходження першого елемента `<h2>` всередині поточного елемента.
   - Використовуємо `.textContent` для отримання текстового вмісту елемента.

6. Отримання кількості елементів у категорії:
   ```javascript
   const itemLength = items[i].querySelectorAll('li').length;
   ```
   - Використовуємо `items[i]` для отримання поточного елемента в циклі.
   - Використовуємо `querySelectorAll('li')` для знаходження всіх елементів `<li>` всередині поточного елемента.
   - Використовуємо `.length` для визначення кількості знайдених елементів.

7. Виведення результатів:
   ```javascript
   console.log("Категорія:", categoryName);
   console.log("Кількість елементів:", itemLength);
  

 ```
   - Виводимо значення `categoryName` і `itemLength` у консоль за допомогою `console.log()`.

Ця схема детально пояснює кожен крок коду і описує, що відбувається на кожному етапі виконання.
*/







