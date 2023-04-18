// Переменные для редактирования профиля
const editLink = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editPopupCloseButton = editPopup.querySelector(".popup__close");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const editPopupForm = editPopup.querySelector(".popup__form_edit");
const editPopupChangeName = document.querySelector(".profile__title");
const infoInput = editPopup.querySelector(".popup__input_type_info");
const editPopupChangeInfo = document.querySelector(".profile__subtitle");

// Переменные для добавления картинок в грид
const addLink = document.querySelector(".profile__add-button");
const addPopup = document.querySelector(".popup_type_add");
const addPopupCloseButton = addPopup.querySelector(".popup__close_card");
const addPopupForm = addPopup.querySelector(".popup__form_add");
const addPopupChangeNameCard = document.querySelector(".card__title");

// нажатие на карточку
const popupImg = document.querySelector('.popup_type_img');
const cardImg = document.querySelector('.card__img');
const cardImgName = popupImg.querySelector('.popup__title-img');
const linkImg = popupImg.querySelector('.popup__card-img');
const closeImg = popupImg.querySelector('.popup__close');


// универсальная функция открытия попапа
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
};

// универсальная функция закртия попапа
function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
};


function formSubmitHandler(event) {
  event.preventDefault();
  closePopup(editPopup);
  editPopupChangeName.textContent = nameInput.value;
  editPopupChangeInfo.textContent = infoInput.value;
};

editLink.addEventListener("click", () => {
  openPopup (editPopup);
  nameInput.value = editPopupChangeName.textContent;
  infoInput.value = editPopupChangeInfo.textContent;
});

editPopupCloseButton.addEventListener("click", () => {
  closePopup(editPopup);
});

editPopupForm.addEventListener('submit', formSubmitHandler);


// Ищем template для добавления карточек

const cardTemplate = document.getElementById("card-template");
const cardGrid = document.querySelector(".elements");

const createCardElement = (cardData) => {
  const cardElement = cardTemplate.content
    .querySelector('.card')
    .cloneNode(true);
  
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector('.card__img');

  cardName.innerHTML = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__favorites");

  // функция удаления картинки - корзинка
  const handleDelete = () => {
    cardElement.remove();
  };


  // функция нравится - сердечко
  const handleLike = () => {
    cardLikeButton.classList.toggle('card__favorites_active');
  };
  
  cardDeleteButton.addEventListener('click', handleDelete);

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

closeImg.addEventListener('click', () => {
  closePopup(popupImg);
});

const renderCardElement = (cardElement) => {
  cardGrid.prepend(cardElement);
};

initialCards.forEach((card) => {
  renderCardElement(createCardElement(card));
});

// открытие и закрытие попапа для добавления карточек

addLink.addEventListener('click', () => {
  openPopup(addPopup);
});

addPopupCloseButton.addEventListener('click', () => {
  closePopup(addPopup);
});

// функция добавления карточек

const handleAddLinkSubmit = (event) => {
  event.preventDefault();

  const cardNameInput = addPopup.querySelector('.popup__input_type_card-name');
  const cardURLInput = addPopup.querySelector('.popup__input_type_card-url');

  const name = cardNameInput.value;
  const link = cardURLInput.value;

  const cardAdd = {
    name,
    link,
  };

  renderCardElement(createCardElement(cardAdd));
  closePopup(addPopup);
};

// кнопка добавить карточку
addPopupForm.addEventListener('submit', handleAddLinkSubmit);


