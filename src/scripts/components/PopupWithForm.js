import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, getInputValues) {
    super(popupSelector);
    this._getInputValues = getInputValues;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input'); // почему all
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
    this._form.addEventListener('submit', this._getInputValues);
  }

  close() {
    super.close();
    this._form.reset();
  }
  
}  