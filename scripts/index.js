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
const popupAddChangeNameCard = document.querySelector(".card__title");
const cardNameInput = popupAddCard.querySelector('.popup__input_type_card-name');
const cardURLInput = popupAddCard.querySelector('.popup__input_type_card-url');

// нажатие на карточку
const popupImg = document.querySelector('.popup_type_img');
const cardImg = document.querySelector('.card__img');
const cardImgName = popupImg.querySelector('.popup__title-img');
const linkImg = popupImg.querySelector('.popup__card-img');
const poupCloseImg = popupImg.querySelector('.popup__close');

// универсальная функция открытия попапа
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  document.addEventListener('keydown', keyCloseByEsc);
  document.addEventListener('mousedown', closeCardOverlay);
};

// универсальная функция закртия попапа
function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
  document.removeEventListener('keydown', keyCloseByEsc);
  document.removeEventListener('mousedown', closeCardOverlay);

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

function keySubmitFormByEnter (evt) {// функция для отправки формы на  enter 
  if (evt.key === 'Enter') { 
    submitEditProfileForm();
    submitAddCardForm();
}
}

function submitEditProfileForm(event) {
  event.preventDefault();
  closePopup(popupEditProfile);
  popupEditChangeName.textContent = nameInput.value;
  popupEditChangeInfo.textContent = infoInput.value;
};

buttonOpenFormEditProfile.addEventListener("click", () => {
  openPopup (popupEditProfile);
  nameInput.value = popupEditChangeName.textContent;
  infoInput.value = popupEditChangeInfo.textContent;
});

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEditProfile);
});

formEditProfile.addEventListener('submit', submitEditProfileForm);

// Ищем template для добавления карточек

const cardTemplate = document.getElementById("card-template");
const cardGrid = document.querySelector(".elements");

const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content
    .querySelector('.card')
    .cloneNode(true);
  
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector('.card__img');

  cardName.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__favorites");

  // функция удаления картинки - корзинка
  const handleDeleteCard = () => {
    cardElement.remove();
  };

  // функция нравится - сердечко
  const handleLike = () => {
    cardLikeButton.classList.toggle('card__favorites_active');
  };
  
  cardDeleteButton.addEventListener('click', handleDeleteCard);

  cardLikeButton.addEventListener('click', handleLike);

  const openImgCardPopup = () => {
    openPopup(popupImg);
    linkImg.src = cardImage.src;
    linkImg.alt = cardImage.alt;
    cardImgName.textContent = linkImg.alt;
  };

  // открытие изображения в большом варианте
  cardImage.addEventListener('click', openImgCardPopup);
  return cardElement;
};

poupCloseImg.addEventListener('click', () => {
  closePopup(popupImg);
});

const renderCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
};

initialCards.forEach((card) => {
  renderCardElement(createCardElement(card));
});

// открытие и закрытие попапа для добавления карточек

buttonOpenFormAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
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
  closePopup(popupAddCard);
};

// кнопка добавить карточку
formAddCard.addEventListener('submit', submitAddCardForm);

// закрытие форм на esc

