const editLink = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
const editPopupCloseButton = editPopup.querySelector(".popup__close");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const editPopupSave =  editPopup.querySelector(".popup__save");
const editPopupForm = editPopup.querySelector(".popup__form");
const editPopupChangeName = document.querySelector(".profile__title");
const infoInput = editPopup.querySelector(".popup__input_type_info");
const editPopupChangeInfo = document.querySelector(".profile__subtitle");


editLink.addEventListener("click", () => {
  console.log("click");

  editPopup.classList.add("popup_open");
  nameInput.value = editPopupChangeName.innerHTML;
  infoInput.value = editPopupChangeInfo.innerHTML;
});

editPopupCloseButton.addEventListener("click", () => {
  editPopup.classList.remove("popup_open");
});

editPopupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const info = infoInput.value;
  editPopupChangeName.innerHTML = name;
  editPopupChangeInfo.innerHTML = info;
  editPopup.classList.remove("popup_open");
});



console.log("editlink");
console.log("editPopup");

console.log("JS")
