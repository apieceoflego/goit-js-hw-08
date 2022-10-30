import throttle from 'lodash.throttle';

const MESSAGE_KEY = 'feedback-form-state';

let inputData = JSON.parse(localStorage.getItem(MESSAGE_KEY)) || {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextAreaAllInput, 500));

populateTextArea();

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(MESSAGE_KEY);
  inputData = {};
}

function onTextAreaAllInput(event) {
  inputData[event.target.name] = event.target.value;
  localStorage.setItem(MESSAGE_KEY, JSON.stringify(inputData));
}

function populateTextArea() {
  const savedMessage = localStorage.getItem(MESSAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  if (parsedMessage) {
    refs.textarea.value = parsedMessage.message || '';
    refs.input.value = parsedMessage.email || '';
  }
}
