// не забудь сделать экспорт!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default class Card {
    constructor(data, templateSelector, handleCardClick, openDelete, changeLike, userId) { //в этих же скобках будет попап удаления карточки (openDelete) popupDelete - в index.js
      // console.log(data)
      this._name = data.name; 
      this._link = data.link;
      this._myId = userId;
      this._likes = data.likes;
      this._likesLength = data.likes.length;
      this._ownerId = data.owner._id;
      this._cardId = data._id;
      this._templateSelector = templateSelector;
      this._changeLike = changeLike;
      this._openDelete = openDelete;
      this._element = this._getCardElement();
      this._cardTitle = this._element.querySelector('.card__title');
      this._cardImg = this._element.querySelector('.card__img');
      this._cardDeleteButton = this._element.querySelector('.card__delete-button');
      this._cardLikeButton = this._element.querySelector('.card__favorites');
      this._handleCardClick = handleCardClick;
      this._counter = this._element.querySelector('.card__counter');
    }

    // приватный метод для корзины удаления карточки
    _changeVisibleTrashButton() {
      this._myId == this._ownerId ? this._cardDeleteButton.style.display = 'block' : this._cardDeleteButton.remove();
    }

    
    //функция лайка карточки
    _handleLike = () => { 
      this._changeLike(this.isLiked(), this._cardId);
    }


    isLiked = () => {
      return this._cardLikeButton.classList.contains('card__favorites_active');
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
      this._checkLikeStatus();
      this._changeVisibleTrashButton();
      return this._element;
    }

  handleRemoveCard() { //функция удаления карточки
    this._element.remove(); 
    this._element = null;
  }

  _handleDelete = () => {
    this._openDelete({card: this, cardId: this._cardId}); // подтверждение удаления карточки
  };

  _handleImgCardPopup = () => {
    this._handleCardClick({cardname: this._name, link: this._link}); 
 }

  _setEventListeners = () => {
    this._cardDeleteButton.addEventListener('click', this._handleDelete); // слушатель удаления карточки
    this._cardLikeButton.addEventListener('click', this._handleLike); // слушатель лайка карточки
    this._cardImg.addEventListener('click', this._handleImgCardPopup); // слушатель открытия картинки
  }

  _checkLikeStatus() {
    this._likes.forEach(item => {
      if (item._id === this._myId) {
        this._cardLikeButton.classList.add('card__favorites_active')
        return
      }
    })
    this._counter.textContent = this._likesLength
  }

  toggleLike(likes) {
    this._cardLikeButton.classList.toggle('card__favorites_active')
    this._counter.textContent = likes.length
  }


}
