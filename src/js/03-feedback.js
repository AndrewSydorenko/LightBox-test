const form = document.forms[0];
console.log(form);

// form.addEventListener('input', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formElements = event.currentTarget.elements;

//     const mail = formElements.email.value;
//     const message = formElements.message.value;

//     console.log({ mail, message });
//     event.currentTarget.reset();
// };