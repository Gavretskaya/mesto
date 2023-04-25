// Делаем валидацию формы редактирования 

function setInputValidState(config, input, errorElement) {
    // валидный
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
}

function setInputInvalidState(config, input, errorElement) {
    // невалидный
    input.classList.add(config.inputErrorClass);  
    errorElement.textContent = input.validationMessage;
}

function checkInputValidity(config, input, form) {
  const errorElement = form.querySelector(`#error-${input.id}`);

    if (input.checkValidity()) { //валидный
        setInputValidState(config, input, errorElement);
  } else { //невалидный
        setInputInvalidState(config, input, errorElement);
  }
}

// неактивная кнопка сохранения 
function disableButton(config, button) {
  button.classList.add(config.inactiveButtonClass); 
  button.setAttribute('disabled', '');
}

// активная кнопка сохранения 
function enableButton(config, button) {
  button.classList.remove(config.inactiveButtonClass);
  button.removeAttribute('disabled');
}

function toggleButtonValidity(config, form) {
   const submitButton = form.querySelector(config.submitButtonSelector);

   if (form.checkValidity()){
      enableButton(config, submitButton);
   } else {
      disableButton(config, submitButton);
   }
}

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
      });
  
      const inputsEdit = form.querySelectorAll(config.inputSelector);
      const inputsEditArray = Array.from(inputsEdit);
      inputsEditArray.forEach(function (input) {
        input.addEventListener('input', () => {
              checkInputValidity(config, input, form);
              toggleButtonValidity(config, form);
        });
      });
  });
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'error-message'
}); 

