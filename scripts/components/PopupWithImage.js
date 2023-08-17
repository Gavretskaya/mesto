import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) { //взяли родительский класс конструктора из Popup 'подтянули'/копировали
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__card-img') //нашли картинку в которую подставляем src
    this._imagePopupCaption = this._popup.querySelector('.popup__title-img')
  }

  open = (data) => { //делаем метод стрелочным чтобы он выполнялся в контексте именно попапа, а не в классе Card например
    this._popupImage.src = data.link; //присвоили обьект который он получает + свойство link
    this._popupImage.alt = data.name;
    this._imagePopupCaption.textContent = data.name;
    super.open()
  }
}