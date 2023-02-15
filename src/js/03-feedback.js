import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const FORM_DATA = 'feedback-form-state';
let currentData = {};

addSavedData();

formRef.addEventListener('input', throttle(saveData, 500));
formRef.addEventListener('submit', onSubmit);

function saveData(evt) {
  currentData[evt.target.name] = evt.target.value;

  localStorage.setItem(FORM_DATA, JSON.stringify(currentData));
  if (!currentData.email && !currentData.message)
    localStorage.removeItem(FORM_DATA);
}

function onSubmit(evt) {
  evt.preventDefault();

  console.log(currentData);

  evt.currentTarget.reset();
  localStorage.removeItem(FORM_DATA);
}

function addSavedData() {
  const formData = localStorage.getItem(FORM_DATA);

  if (formData) {
    currentData = JSON.parse(formData);
    formRef.email.value = currentData.email;
    formRef.message.value = currentData.message;
  }
}
