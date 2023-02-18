import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state'
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

formEl.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', onInputBlur);
});

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onInputBlur(event) {
    // save only the field that was changed
    const field = event.target.name;
    const value = event.target.value;
    formData[field] = value;
    const formJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formJson);
}


function onFormInput(event) {

    formData[event.target.name] = event.target.value;
    const formJson = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formJson);
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

    const keys = Object.keys(elements).filter(el => isNaN(el));
    keys.forEach(key => {
        elements[key].value = formData[key] || '';
    });
};

textOutput(formEl);