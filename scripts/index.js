// Переменные для редактирования профиля
const editLink = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupEditCloseButton = popupEdit.querySelector(".popup__close");
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const popupEditForm = popupEdit.querySelector(".popup__form_edit");
const popupEditChangeName = document.querySelector(".profile__title");
const infoInput = popupEdit.querySelector(".popup__input_type_info");
const popupEditChangeInfo = document.querySelector(".profile__subtitle");

// Переменные для добавления картинок в грид
const popupAddLink = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const popupAddCloseButton = popupAdd.querySelector(".popup__close_card");
const popupAddForm = popupAdd.querySelector(".popup__form_add");
const popupAddChangeNameCard = document.querySelector(".card__title");
const cardNameInput = popupAdd.querySelector('.popup__input_type_card-name');
const cardURLInput = popupAdd.querySelector('.popup__input_type_card-url');

// нажатие на карточку
const popupImg = document.querySelector('.popup_type_img');
const cardImg = document.querySelector('.card__img');
const cardImgName = popupImg.querySelector('.popup__title-img');
const linkImg = popupImg.querySelector('.popup__card-img');
const poupCloseImg = popupImg.querySelector('.popup__close');

// универсальная функция открытия попапа
function openPopup(popupName) {
  popupName.classList.add("popup_opened");
};

// универсальная функция закртия попапа
function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
};

function submitFormHandler(event) {
  event.preventDefault();
  closePopup(popupEdit);
  popupEditChangeName.textContent = nameInput.value;
  popupEditChangeInfo.textContent = infoInput.value;
  event.target.reset();
};

editLink.addEventListener("click", () => {
  openPopup (popupEdit);
  nameInput.value = popupEditChangeName.textContent;
  infoInput.value = popupEditChangeInfo.textContent;
});

popupEditCloseButton.addEventListener("click", () => {
  closePopup(popupEdit);
});

popupEditForm.addEventListener('submit', submitFormHandler);

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

popupAddLink.addEventListener('click', () => {
  openPopup(popupAdd);
});

popupAddCloseButton.addEventListener('click', () => {
  closePopup(popupAdd);
});

// функция добавления карточек

const handleAddLinkSubmit = (event) => {
  event.preventDefault();

  const name = cardNameInput.value;
  const link = cardURLInput.value;

  const cardAdd = {
    name,
    link,
  };

  renderCardElement(createCardElement(cardAdd));
  event.target.reset();
  closePopup(popupAdd);
  
};

// кнопка добавить карточку
popupAddForm.addEventListener('submit', handleAddLinkSubmit);


