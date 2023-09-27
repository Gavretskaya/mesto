export default class UserInfo { //можно через константу
  constructor(infoConfig) {
    this._profileName = document.querySelector(infoConfig.profileNameSelector);
    this._profileInfo = document.querySelector(infoConfig.profileInfoSelector);
    this._profileAvatar = document.querySelector(infoConfig.profileAvatar)
  }

  getUserInfo() { //возвращает объект в форму - 2 инпута имя и инфо
    return {username: this._profileName.textContent, info: this._profileInfo.textContent}
  }

  setUserInfo({username, avatar, info}) {
    this._profileAvatar.src = avatar
    this._profileName.textContent = username;
    this._profileInfo.textContent = info;
  }
}