export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close');
  }

  _handleEscClose = (evt) => { //закрытие на escape
    if (evt.key === 'Escape') { 
      this.close()
    }
  }

  _handleCloseButton = () => { //название проверь!
    this.close()
  }

  _handleClickByOverlay = (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains("popup__close")) {
      this.close()
    }
  }

  setEventListeners() {
    this._popupCloseButton.addEventListener('click', this._handleCloseButton);
    this._popup.addEventListener('click', this._handleClickByOverlay);
  }

  open() { //открытие попапа
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() { //закрытие попапа + escape
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
}