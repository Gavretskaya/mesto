// не забудь сделать экспорт!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default class Card {
    constructor(data, templateSelector, handleCardClick) {
      // console.log(data)
      this._name = data.name;
      this._link = data.link;
      this._myId = data.myid;
      this._ownerId = data.owner._id;
      this._templateSelector = templateSelector;
      this._element = this._getCardElement();
      this._cardTitle = this._element.querySelector('.card__title');
      this._cardImg = this._element.querySelector('.card__img');
      this._cardDeleteButton = this._element.querySelector('.card__delete-button');
      this._cardLikeButton = this._element.querySelector('.card__favorites');
      this._handleCardClick = handleCardClick;
    }

    // приватный метод для корзины удаления карточки
    _changeVisibleTrashButton() {
      this._myId == this._ownerId ? this._cardDeleteButton.style.display = 'block' : this._cardDeleteButton.remove();
    }

    // добавление карточек на стр, находит template выбирает нужный класс, клонирует и возвращает свой
    _getCardElement() { 
      const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
      return cardElement;
    }

    // вставляем данные карточки в разметку
    generateCard() {
      this._setEventListeners();
      this._cardTitle.textContent = this._name;
      this._cardImg.src = this._link;
      this._cardImg.alt = this._name;
      this._changeVisibleTrashButton();
      return this._element;
    }

  _handleDeleteCard = () => { //функция удаления карточки
    this._element.remove(); 
  }

  _handleLike = () => { //функция лайка карточки
    this._cardLikeButton.classList.toggle('card__favorites_active');
  }

  _handleImgCardPopup = () => {
    this._handleCardClick({cardname: this._name, link: this._link}); 
 }

  _setEventListeners = () => {
    this._cardDeleteButton.addEventListener('click', this._handleDeleteCard); // слушатель удаления карточки
    this._cardLikeButton.addEventListener('click', this._handleLike); // слушатель лайка карточки
    this._cardImg.addEventListener('click', this._handleImgCardPopup); // слушатель открытия картинки
  }
}
