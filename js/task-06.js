validationInput.addEventListener('blur', () => {
  const requiredLength = parseInt(validationInput.getAttribute('data-length'));
  const enteredValue = validationInput.value.trim(); // Доданий метод trim()

  const enteredLength = enteredValue.length;

  if (enteredLength === requiredLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});
