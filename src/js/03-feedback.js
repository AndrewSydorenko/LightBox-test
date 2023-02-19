'use strict';
import throttle from 'lodash.throttle';
import localStorageApi from './localstorage';

const contactFormEl = document.querySelector('.feedback-form');
const CONTACT_FORM_LS_KEY = 'feedback-form-state';

const fillFormFields = ({ elements }) => {
    const formData = localStorageApi.load(CONTACT_FORM_LS_KEY);

    if (!formData) {
        return;
    }

    const keys = Object.keys(elements).filter(el => isNaN(el));

    keys.forEach(key => {
        elements[key].value = formData[key] || '';
    });
};

const handleFormChange = ({ target }) => {
    const { value, name } = target;

    const formData = localStorageApi.load(CONTACT_FORM_LS_KEY) || {};

    formData[name] = value;

    localStorageApi.save(CONTACT_FORM_LS_KEY, formData);
};

const handleFormSubmit = event => {
    event.preventDefault();

    const { target } = event;

    const Email = target.email.value;
    const Message = target.message.value;

    console.log({ Email, Message });

    target.reset();

    localStorageApi.remove(CONTACT_FORM_LS_KEY);
};

contactFormEl.addEventListener('submit', handleFormSubmit);
contactFormEl.addEventListener('input', throttle(handleFormChange, 500));

fillFormFields(contactFormEl);