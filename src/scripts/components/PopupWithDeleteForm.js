import Popup from "./Popup.js";

export default class PopupWithDeleteForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._formDelete = this._popup.querySelector('.popup__form');
    this._submitButton = this._formDelete.querySelector('.popup__save');
    this._deafaultButtonTextConfirm = this._submitButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners()
    this._formDelete.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.textContent = `Удаление...`
      this._submitFunction({card: this._element, cardId: this._cardId});
    })
  }

  setupDefaultTextForConfirm() {
    this._submitButton.textContent = this._deafaultButtonTextConfirm;
  }

  open = ({card, cardId}) => {
    super.open()
    this._element = card;
    this._cardId = cardId;
  }


}