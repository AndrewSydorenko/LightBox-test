import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state'
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));


function onFormInput(event) {
    formData[event.target.name] = event.target.value;
    const formJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formJson)
};

function onFormSubmit(event) {
    event.preventDefault();
    const { target } = event;
    const { email, message } = target.elements;
    const mail = email.value;
    const text = message.value;
    if (!mail || !text) {
        alert('пусто')
        return
    }
    console.log({ mail, text });
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

const textOutput = ({ elements }) => {

    const savedMessage = formData;
    if (!savedMessage) {
        return
    }
    const keys = Object.keys(elements).filter(el => isNaN(el));
    keys.forEach(key => {
        elements[key].value = savedMessage[key] || '';
    });
};

textOutput(formEl);