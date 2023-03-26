const FORM_KEY = 'feedback-form-state';
let objForm = JSON.parse(localStorage.getItem(FORM_KEY)) || {};
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('input', () => {
  localStorage.setItem(FORM_KEY, JSON.stringify({ email: email.value, message: message.value }));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  if (email.value === '' || message.value === '') {
    return alert('Будь-ласка, заповніть всі поля!');
  }
  e.currentTarget.reset();
});

loadPage()

function loadPage() {
  if (objForm) {
    email.value = objForm.email || '';
    message.value = objForm.message || '';
    localStorage.removeItem(FORM_KEY);
  }
}