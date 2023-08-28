export default class UserInfo { //можно через константу
  constructor(infoConfig) {
    this._profileName = document.querySelector(infoConfig.profileNameSelector);
    this._profileInfo = document.querySelector(infoConfig.profileInfoSelector);
  }

  getUserInfo() { //возвращает объект в форму - 2 инпута имя и инфо
    return {username: this._profileName.textContent, info: this._profileInfo.textContent}
  }

  setUserInfo(dataUser) {
    this._profileName.textContent = dataUser.username;
    this._profileInfo.textContent = dataUser.info;
  }
}