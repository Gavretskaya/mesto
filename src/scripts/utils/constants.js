const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'error-message'
};

const infoConfig = { //объект для UserInfo, чтобы потом сделать в инпуте заполненные поля
  profileNameSelector: '.profile__title',
  profileInfoSelector: '.profile__subtitle',
  profileAvatar: '.profile__avatar'
};

// Кнопки
const buttonOpenFormEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenFormAddCard = document.querySelector(".profile__add-button");
const buttonOpenFormEditAvatar = document.querySelector('.profile__avatar-button');

// формы попапов
const formEditProfile = document.querySelector(".popup__form_edit");
const formAddCard = document.querySelector(".popup__form_add");
const formEditAvatar = document.querySelector('.popup__form_avatar');

//константы с селекторами
const popupProfileSelector = '.popup_type_edit'; //не уверена какой должен быть класс
const PopupImageSelector = '.popup_type_img';
const elementsSelector = '.elements';
const popupAddCardsSelector = '.popup_type_add';
const popupEditAvatarSelector = '.popup_type_avatar';
const popupDeleteSelector = '.popup_type_delete';

export {config, infoConfig, 
  buttonOpenFormEditProfile, buttonOpenFormAddCard, buttonOpenFormEditAvatar, 
  formEditProfile, formAddCard, formEditAvatar,
  popupProfileSelector, PopupImageSelector, elementsSelector,
  popupAddCardsSelector, popupEditAvatarSelector, popupDeleteSelector}