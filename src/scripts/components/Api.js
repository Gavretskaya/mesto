export default class Api {
  constructor (options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
       headers: {
        authorization: this._authorization
       }
    })
    .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
       }
    })
    .then(this._checkResponse)
  }

  setUserInfo(data) {
    return fetch (`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.info, 
      })
    })
  .then(this._checkResponse)
  }

  setNewAvatar(data) {
    return fetch (`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar, 
      })
    })
  .then(this._checkResponse)
  }

  addCard(data) {
    return fetch(`${this._url}/cards`,{
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.cardname,
        link: data.link,
      })
    })
    .then(this._checkResponse)
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization,
      }
    })
    .then(this._checkResponse)
  }
  
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
      }
    })
    .then(this._checkResponse)
  }

  deleteCardConfirm(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization,
      }
    })
    .then(this._checkResponse)
  }

}