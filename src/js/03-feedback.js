import throttle from 'lodash.throttle';

const el = {
    form: document.querySelector('feedback-form'),
    email: document.querySelector('feedback-forn input'),
    message: document.querySelector('feedback-forn textarea')
};

startPage();

const formData = {};