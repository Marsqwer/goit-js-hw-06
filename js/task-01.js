const categoriesList = document.querySelector('#categories');
const categories = document.querySelectorAll('li.item');
console.log("кількість категорій", categories.length);

categories.forEach((categories) => {
    const categoriesName = categories.querySelector('h2').textContent;
    const categoriesItems = categories.querySelectorAll('li').length;

    console.log("категорія:", categoriesName);
    console.log("кількість елементів:", categoriesItems);
});