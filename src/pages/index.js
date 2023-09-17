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

function createNewCard(item) {
 const card = new Card(item, '#card-template', popupImage.open)
 return card.generateCard();
}

const section = new Section({ //добавляем карточки в галерею
  items: initialCards, 
  renderer: createNewCard
}, elementsSelector)

section.renderItems() //вывызываем класс section

const editProfileSubmit = (dataForm) => { //обработчик редактирования профиля
  userInfo.setUserInfo(dataForm);
  popupProfile.close();
}

const popupProfile = new PopupWithForm (popupProfileSelector, editProfileSubmit);

popupProfile.setEventListeners();

const popupAddCards = new PopupWithForm (popupAddCardsSelector, (item) => {
  section.addItem(createNewCard(item));
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



