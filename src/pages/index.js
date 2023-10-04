import {config, infoConfig,
   buttonOpenFormEditProfile, buttonOpenFormAddCard, buttonOpenFormEditAvatar,
   formEditProfile, formAddCard, formEditAvatar, 
   popupProfileSelector, PopupImageSelector, elementsSelector,
   popupAddCardsSelector, popupEditAvatarSelector, popupDeleteSelector,
  } from "../scripts/utils/constants.js"
import Card from "../scripts/components/Card.js"
import FormValidator from "../scripts/components/FormValidator.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Api from "../scripts/components/Api.js";
import PopupWithDeleteForm from "../scripts/components/PopupWithDeleteForm.js";
import './index.css';
let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-76',
  headers: {
    authorization: 'f0266d78-a99a-4c52-847c-13e5ec99372b',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo(infoConfig);

const popupImage = new PopupWithImage(PopupImageSelector); // создали экземпляр 
popupImage.setEventListeners(); //теперь будет работать закрытие по оверлею и esc

const popupDelete = new PopupWithDeleteForm (popupDeleteSelector, ({card, cardId}) => {
  api.deleteCardConfirm(cardId)
    .then(()=> {
      console.log(card);
      card.handleRemoveCard();
      popupDelete.close();
    })
    .catch((error => console.error(`Возникла ошибка при удалении карточки ${error}`)))
    .finally(() => popupDelete.setupDefaultTextForConfirm())
})
popupDelete.setEventListeners()

function createNewCard(item) {
 const card = new Card(item, '#card-template', popupImage.open, popupDelete.open, (isLiked, cardId) => { 
  if (isLiked) {
    console.log(isLiked)
    api.deleteLike(cardId)
      .then(res => {
        card.toggleLike(res.likes);
      })
      .catch((error) => console.error(`Возникла ошибка при снятии лайка ${error}`))
   } else { 
     api.addLike(cardId) 
      .then(res => {
        card.toggleLike(res.likes);
      })
      .catch((error) => console.error(`Возникла ошибка при постановке лайка ${error}`))
   }
 }, userId);
 return card.generateCard();
}

const section = new Section((element) => { //добавляем карточки в галерею
  section.addItem(createNewCard(element))
}, elementsSelector)

const popupProfile = new PopupWithForm (popupProfileSelector, (dataForm) => { //обработчик редактирования профиля
  api.setUserInfo(dataForm)
  .then(res => {
    userInfo.setUserInfo({username: res.name, info: res.about, avatar: res.avatar});
    popupProfile.close();
  })
  .catch((error => console.error(`Возникла ошибка при редактировании профиля ${error}`)))
  .finally(() => popupProfile.setupDefaultText())
});
popupProfile.setEventListeners();

const popupAddCards = new PopupWithForm (popupAddCardsSelector, (data) => { // добавляем карточку api запрос
  Promise.all([api.getInfo(), api.addCard(data)])
    .then(([dataUser, dataCard]) => {
      dataCard.myid = userId;
      section.addItem(createNewCard(dataCard));
      popupAddCards.close();
    })
    .catch((error => console.error(`Возникла ошибка при добавлении карточки ${error}`)))
    .finally(() => popupAddCards.setupDefaultText())
});
popupAddCards.setEventListeners();

const popupEditAvatar = new PopupWithForm (popupEditAvatarSelector, (data) =>{
  api.setNewAvatar(data)
    .then(res => {
      userInfo.setUserInfo({username: res.name, info: res.about, avatar: res.avatar})
      popupEditAvatar.close();
    })
    .catch((error => console.error(`Возникла ошибка при загрузке аватара ${error}`)))
    .finally(() => popupEditAvatar.setupDefaultText())
})
popupEditAvatar.setEventListeners()

// слушатели на кнопочки

buttonOpenFormEditProfile.addEventListener('click', () => { //кнопка редактирования профиля - карандашик
  profileValidator.resetValidation();
  popupProfile.setInputValues(userInfo.getUserInfo());
  popupProfile.open();
})

buttonOpenFormAddCard.addEventListener('click', () => {  // кнопка плюсик - открытие и закрытие попапа для добавления карточек + ВАЛИДАЦИЯ
  cardValidator.resetValidation();
  popupAddCards.open();
});

buttonOpenFormEditAvatar.addEventListener('click', () => { //кнопка редактирования аватара
  avatarValidator.resetValidation();
  popupEditAvatar.setInputValues(userInfo.getUserInfo());
  popupEditAvatar.open();
})

// валидация
const profileValidator = new FormValidator(config, formEditProfile);
const cardValidator = new FormValidator(config, formAddCard);
const avatarValidator = new FormValidator(config, formEditAvatar);
profileValidator.enableValidation();
cardValidator.enableValidation();
avatarValidator.enableValidation();

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([userData, dataCard]) => {
    userId = userData._id;
    userInfo.setUserInfo({username: userData.name, info: userData.about, avatar: userData.avatar});
    section.renderItems(dataCard);
  })
  .catch((error) => console.error(`Ошибка при загрузке начальных данных страницы ${error}`))

