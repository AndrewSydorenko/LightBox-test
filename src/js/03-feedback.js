const form = document.querySelector('.feedback-form')

const mail = form.email.value;
const message = form.message.value;
const LOKALESTORE = 'feedback-form-state';

function saveCurrentState({ }) {
    localStorage.setItem(LOKALESTORE);
}

// form.addEventListener('input');

form.addEventListener('input', (event) => {
    event.preventDefault();
    console.log({ mail, message });

});

