document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  const phoneInput = form.querySelector('#phone');
  const emailInput = form.querySelector('#mail');
  const nameInput = form.querySelector('#name');
  const checkbox = form.querySelector('#checkbox');
  const submitBtn = form.querySelector('.form__submit');

  phoneInput.addEventListener('input', function(e) {
    let value = this.value.replace(/\D/g, '');
    
    if (value.length === 11 && (value[0] === '7' || value[0] === '8')) {
      value = '7' + value.substring(1);
    }
    
    let formattedValue = '+7';
    if (value.length > 1) {
      formattedValue += ' (' + value.substring(1, 4);
    }
    if (value.length > 4) {
      formattedValue += ') ' + value.substring(4, 7);
    }
    if (value.length > 7) {
      formattedValue += '-' + value.substring(7, 9);
    }
    if (value.length > 9) {
      formattedValue += '-' + value.substring(9, 11);
    }
    
    this.value = formattedValue;
  });

  emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
      this.classList.add('form__input--error');
      showError(this, 'Введите корректный email');
    } else {
      this.classList.remove('form__input--error');
      hideError(this);
    }
  });
});