const editLink = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
const editPopupCloseButton = editPopup.querySelector(".popup__close");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const editPopupForm = editPopup.querySelector(".popup__form");
const editPopupChangeName = document.querySelector(".profile__title");
const infoInput = editPopup.querySelector(".popup__input_type_info");
const editPopupChangeInfo = document.querySelector(".profile__subtitle");

function openPopup() {
  editPopup.classList.add("popup_opened");
};

function closePopup() {
  editPopup.classList.remove("popup_opened");
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  closePopup ();
  editPopupChangeName.textContent = nameInput.value;
  editPopupChangeInfo.textContent = infoInput.value;
};

editLink.addEventListener("click", () => {
  openPopup();
  nameInput.value = editPopupChangeName.textContent;
  infoInput.value = editPopupChangeInfo.textContent;
});

editPopupCloseButton.addEventListener("click", () => {
  closePopup();
});

editPopupForm.addEventListener('submit', formSubmitHandler)









