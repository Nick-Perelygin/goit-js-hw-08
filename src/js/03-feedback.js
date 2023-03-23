const FORM_KEY = 'feedback-form-state';
let objForm = JSON.parse(localStorage.getItem(FORM_KEY)) || {};
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('input', () => {
  console.log({ email: email.value, message: message.value });
  localStorage.setItem(FORM_KEY, JSON.stringify(objForm));
});

loadPage()

function loadPage() {
  if (objForm) {
    email.value = objForm.email || '';
    message.value = objForm.message || '';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Будь-ласка, заповніть всі поля!');
  }
  localStorage.removeItem(FORM_KEY);
  e.currentTarget.reset();
  objForm = {};

  console.log({ email: email.value, message: message.value });
});