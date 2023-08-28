import { initialCards, config} from "../scripts/utils/constants.js"
import Card from "../scripts/components/Card.js"
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import './index.css';

// Кнопки
const buttonOpenFormEditProfile = document.querySelector('.profile__edit-button');
const buttonOpenFormAddCard = document.querySelector(".profile__add-button");

// Переменные
const popupEditProfile = document.querySelector('.popup_type_edit');
const formEditProfile = popupEditProfile.querySelector(".popup__form_edit");
const popupAddCard = document.querySelector(".popup_type_add");
const formAddCard = popupAddCard.querySelector(".popup__form_add");

//константы с селекторами
const popupProfileSelector = '.popup_type_edit'; //не уверена какой должен быть класс
const PopupImageSelector = '.popup_type_img';
const elementsSelector = '.elements';
const popupAddCardsSelector = '.popup_type_add';

const infoConfig = { //объект для UserInfo, чтобы потом сделать в инпуте заполненные поля
  profileNameSelector: '.profile__title',
  profileInfoSelector: '.profile__subtitle'
};

const userInfo = new UserInfo(infoConfig);

const popupImage = new PopupWithImage(PopupImageSelector); // создали экземпляр 
popupImage.setEventListeners(); //теперь будет работать закрытие по оверлею и esc

const section = new Section({items: initialCards, renderer: (data) => { //cоздаем карточки
  const card = new Card(data, '#card-template', popupImage.open); // экземпляр карточки openImgCardPopup
  return card.generateCard();
  }
}, elementsSelector)

section.addCardFromMASSIV() //вывызываем класс section

const popupProfile = new PopupWithForm(popupProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupProfile.getInputValues()); 
  popupProfile.close();
});

popupProfile.setEventListeners();

const popupAddCards = new PopupWithForm(popupAddCardsSelector, (evt) => { // экземпляр для попапа добавления картинки - плюсик
  evt.preventDefault();
  section.addItem(section.renderer(popupAddCards.getInputValues())); //вызываем секшн экземпляр(выше)
  popupAddCards.close();
}); 

popupAddCards.setEventListeners();

buttonOpenFormEditProfile.addEventListener('click', () => { //кнопка редактирования профиля - карандашик
  profileValidator.hideError();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
})

buttonOpenFormAddCard.addEventListener('click', () => {  // кнопка плюсик - открытие и закрытие попапа для добавления карточек + ВАЛИДАЦИЯ
  cardValidator.hideError();
  popupAddCards.open();
});

// валидация
const profileValidator = new FormValidator(config, formEditProfile);
const cardValidator = new FormValidator(config, formAddCard);
profileValidator.enableValidation();
cardValidator.enableValidation();



