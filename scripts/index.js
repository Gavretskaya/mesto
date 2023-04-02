const editLink = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
const editPopupCloseButton = editPopup.querySelector(".popup__close");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const editPopupForm = editPopup.querySelector(".popup__form");
const editPopupChangeName = document.querySelector(".profile__title");
const infoInput = editPopup.querySelector(".popup__input_type_info");
const editPopupChangeInfo = document.querySelector(".profile__subtitle");

editLink.addEventListener("click", () => {
  editPopup.classList.add("popup_opened");
});

editLink.addEventListener("click", () => {
  nameInput.value = editPopupChangeName.textContent;
  infoInput.value = editPopupChangeInfo.textContent;
});

editPopupCloseButton.addEventListener("click", () => {
  editPopup.classList.remove("popup_opened");
});

editPopupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const info = infoInput.value;
  editPopupChangeName.textContent = name;
  editPopupChangeInfo.textContent = info;
  editPopup.classList.remove("popup_opened");
});




