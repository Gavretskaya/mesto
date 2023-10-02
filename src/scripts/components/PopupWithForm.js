import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input'); 
    this._submitButton = this._form.querySelector('.popup__save');
    this._defaultButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._values = {}; //пустой объект
    this._inputList.forEach(input => {
      this._values[input.name] = input.value //название свойства, берем в values кладем свойство имя и к значению присваиваем на каждй итерации имя?
    })
    return this._values
  }

  setInputValues(dataUser) {
    this._inputList.forEach(input => {
      input.value = dataUser[input.name];
    })
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `Сохранение...`
      this._submitHandler(this._getInputValues());
    });
  }

  setupDefaultText() {
    this._submitButton.textContent = this._defaultButtonText;
  }

  close() {
    super.close();
    this._form.reset();
  }
  
}  