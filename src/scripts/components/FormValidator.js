export default class FormValidator {
  constructor (config, form) {
    this.form = form;
    this.config = config;
    this.inputsEdit = Array.from(this.form.querySelectorAll(config.inputSelector));  //инпуты форм
    this.button = this.form.querySelector(config.submitButtonSelector);  //кнопка отправки форм
  }

  _setInputValidState(input) {
   // валидный
    const errorElement = this.form.querySelector(`#error-${input.id}`);
    input.classList.remove(this.config.inputErrorClass);
    errorElement.textContent = '';
  }

  _setInputInvalidState(input) {
   // невалидный
   const errorElement = this.form.querySelector(`#error-${input.id}`);
    input.classList.add(this.config.inputErrorClass);  
    errorElement.textContent = input.validationMessage;
  }

  _checkInputValidity(input) { // функция проверяет валидность
     if (input.checkValidity()) { //валидный
        this._setInputValidState(input);
    } else { //невалидный
        this._setInputInvalidState(input);
    }
  }

// неактивная кнопка сохранения 
_disableButton() {
  this.button.classList.add(this.config.inactiveButtonClass); 
  this.button.setAttribute('disabled', '');
}

// активная кнопка сохранения 
_enableButton() {
  this.button.classList.remove(this.config.inactiveButtonClass);
  this.button.removeAttribute('disabled');
}

_toggleButtonValidity() {

 if (this.form.checkValidity()){
    this._enableButton();
 } else {
    this._disableButton();
 }
}

hideError(form) {
  this.inputsEdit.forEach((inputElement) => {
    this._setInputValidState(inputElement);
  });
  this._disableButton();
}

//ставим слушатели
_checkEventListeners = () => {
  this.inputsEdit.forEach((input) => {
    input.addEventListener('input', () => {
      this._checkInputValidity(input);
      this._toggleButtonValidity();
    });
  });
  this.form.addEventListener('submit', (event) => {
    event.submitter.classList.add('popup__save_disabled');
    event.submitter.disabled = true;
  })
};

  enableValidation = () => {
    this._checkEventListeners();
  };

};

