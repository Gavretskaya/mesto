import { initialCards, config} from "./constants.js"
import Card from "./Card.js"
import FormValidator from "./FormValidator.js";

// Переменные для редактирования профиля
const buttonOpenFormEditProfile = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupEditCloseButton = popupEditProfile.querySelector(".popup__close");
const nameInput = popupEditProfile.querySelector(".popup__input_type_name");
const formEditProfile = popupEditProfile.querySelector(".popup__form_edit");
const popupEditChangeName = document.querySelector(".profile__title");
const infoInput = popupEditProfile.querySelector(".popup__input_type_info");
const popupEditChangeInfo = document.querySelector(".profile__subtitle");

// Переменные для добавления картинок в грид
const buttonOpenFormAddCard = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_type_add");
const popupAddCloseButton = popupAddCard.querySelector(".popup__close_card");
const formAddCard = popupAddCard.querySelector(".popup__form_add");
// const popupAddChangeNameCard = document.querySelector(".card__title");
const cardNameInput = popupAddCard.querySelector('.popup__input_type_card-name');
const cardURLInput = popupAddCard.querySelector('.popup__input_type_card-url');

// нажатие на карточку
const popupImg = document.querySelector('.popup_type_img');
// const cardImg = document.querySelector('.card__img');
const cardImgName = popupImg.querySelector('.popup__title-img');
const linkImg = popupImg.querySelector('.popup__card-img');
// const poupCloseImg = popupImg.querySelector('.popup__close');

// для оверлея 
const popups = Array.from(document.querySelectorAll(".popup"));
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  });
});

// универсальная функция открытия попапа
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  document.addEventListener('keydown', keyCloseByEsc);
};

// универсальная функция закртия попапа
function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
  document.removeEventListener('keydown', keyCloseByEsc);
};

function keyCloseByEsc (evt) { // функция закрытия попапов на escape
  if (evt.key === 'Escape') { 
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

// функция закрытия картинки по фону
function closeCardOverlay(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target === popupOpened) {
      closePopup(popupOpened);
  }
};

function submitEditProfileForm(event) { //функция обработки отправки попапа редактирования профиля, поля уже заполнены информацией
  event.preventDefault(); 
  closePopup(popupEditProfile);
  popupEditChangeName.textContent = nameInput.value;
  popupEditChangeInfo.textContent = infoInput.value;
};

function openFormEditProfile () { //открываем форму редактирования профиля
  openPopup (popupEditProfile);
  nameInput.value = popupEditChangeName.textContent;
  infoInput.value = popupEditChangeInfo.textContent;
};

buttonOpenFormEditProfile.addEventListener('click', () => {
  profileValidator.hideError();
  openFormEditProfile();
})

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEditProfile);
});

formEditProfile.addEventListener('submit', submitEditProfileForm); 

// const cardTemplate = document.getElementById("card-template");
const cardGrid = document.querySelector(".elements");

const createCardElement = (data) => {                             // функция создания карточки
  const card = new Card(data, '#card-template', openImgCardPopup); // экземпляр карточки
  const cardElement = card.generateCard(); // создаем карточку и возвращаем ее на стр
  return cardElement;
}

const renderCardElement = (cardElement) => { // функция которая помещает карточки в грид
  cardGrid.prepend(cardElement);
};

initialCards.forEach((card) => { // вызываем предудыщую функцию для каждой карточки??
  renderCardElement(createCardElement(card));
});

function openImgCardPopup(name, link) { // функция открытия попапа с карточками
      openPopup(popupImg);
      linkImg.src = link;
      linkImg.alt = name;
      cardImgName.textContent = name;
};

// открытие и закрытие попапа для добавления карточек

buttonOpenFormAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
  cardValidator.hideError;
});

popupAddCloseButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});

// функция добавления карточек

const submitAddCardForm = (event) => {
  event.preventDefault();

  const name = cardNameInput.value;
  const link = cardURLInput.value;

  const cardAdd = {
    name,
    link,
  };

  renderCardElement(createCardElement(cardAdd));
  event.target.reset();
  event.submitter.classList.add('popup__save_disabled')
  event.submitter.disabled = true;
  closePopup(popupAddCard);
};

// слушатель на кнопку добавить карточку - отправка/событие
formAddCard.addEventListener('submit', submitAddCardForm);

// валидация
const profileValidator = new FormValidator(config, formEditProfile);
const cardValidator = new FormValidator(config, formAddCard);
profileValidator.enableValidation();
cardValidator.enableValidation();



