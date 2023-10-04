(()=>{"use strict";var t={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_invalid",errorClass:"error-message"},e=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector(".profile__avatar-button"),o=document.querySelector(".popup__form_edit"),i=document.querySelector(".popup__form_add"),u=document.querySelector(".popup__form_avatar");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,s(r.key),r)}}function l(t,e,n){return(e=s(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===a(e)?e:String(e)}var f=function(){function t(e,n,r,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"_handleLike",(function(){a._changeLike(a.isLiked(),a._cardId)})),l(this,"isLiked",(function(){return a._cardLikeButton.classList.contains("card__favorites_active")})),l(this,"_handleDelete",(function(){a._openDelete({card:a,cardId:a._cardId})})),l(this,"_handleImgCardPopup",(function(){a._handleCardClick({cardname:a._name,link:a._link})})),l(this,"_setEventListeners",(function(){a._cardDeleteButton.addEventListener("click",a._handleDelete),a._cardLikeButton.addEventListener("click",a._handleLike),a._cardImg.addEventListener("click",a._handleImgCardPopup)})),this._name=e.name,this._link=e.link,this._myId=u,this._likes=e.likes,this._likesLength=e.likes.length,this._ownerId=e.owner._id,this._cardId=e._id,this._templateSelector=n,this._changeLike=i,this._openDelete=o,this._element=this._getCardElement(),this._cardTitle=this._element.querySelector(".card__title"),this._cardImg=this._element.querySelector(".card__img"),this._cardDeleteButton=this._element.querySelector(".card__delete-button"),this._cardLikeButton=this._element.querySelector(".card__favorites"),this._handleCardClick=r,this._counter=this._element.querySelector(".card__counter")}var e,n;return e=t,(n=[{key:"_changeVisibleTrashButton",value:function(){this._myId==this._ownerId?this._cardDeleteButton.style.display="block":this._cardDeleteButton.remove()}},{key:"_getCardElement",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._cardTitle.textContent=this._name,this._cardImg.src=this._link,this._cardImg.alt=this._name,this._checkLikeStatus(),this._changeVisibleTrashButton(),this._element}},{key:"handleRemoveCard",value:function(){this._element.remove(),this._element=null}},{key:"_checkLikeStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id!==t._myId||t._cardLikeButton.classList.add("card__favorites_active")})),this._counter.textContent=this._likesLength}},{key:"toggleLike",value:function(t){this._cardLikeButton.classList.toggle("card__favorites_active"),this._counter.textContent=t.length}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function h(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var v=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"_checkEventListeners",(function(){r.inputsEdit.forEach((function(t){t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonValidity()}))}))})),h(this,"enableValidation",(function(){r._checkEventListeners()})),this.form=n,this.config=e,this.inputsEdit=Array.from(this.form.querySelectorAll(e.inputSelector)),this.button=this.form.querySelector(e.submitButtonSelector)}var e,n;return e=t,(n=[{key:"_setInputValidState",value:function(t){var e=this.form.querySelector("#error-".concat(t.id));t.classList.remove(this.config.inputErrorClass),e.textContent=""}},{key:"_setInputInvalidState",value:function(t){var e=this.form.querySelector("#error-".concat(t.id));t.classList.add(this.config.inputErrorClass),e.textContent=t.validationMessage}},{key:"_checkInputValidity",value:function(t){t.checkValidity()?this._setInputValidState(t):this._setInputInvalidState(t)}},{key:"_disableButton",value:function(){this.button.classList.add(this.config.inactiveButtonClass),this.button.setAttribute("disabled","")}},{key:"_enableButton",value:function(){this.button.classList.remove(this.config.inactiveButtonClass),this.button.removeAttribute("disabled")}},{key:"_toggleButtonValidity",value:function(){this.form.checkValidity()?this._enableButton():this._disableButton()}},{key:"resetValidation",value:function(t){var e=this;this.inputsEdit.forEach((function(t){e._setInputValidState(t)})),this._disableButton()}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,g(r.key),r)}}function _(t,e,n){return(e=g(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var S=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),_(this,"_handleEscClose",(function(t){"Escape"===t.key&&n.close()})),_(this,"_handleCloseButton",(function(){n.close()})),_(this,"_handleClickByOverlay",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("click",this._handleClickByOverlay)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function P(t){var e=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===k(e)?e:String(e)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(n);if(r){var o=E(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return O(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=O(n=o.call(this,t)),a=function(t){n._popupImage.src=t.link,n._popupImage.alt=t.cardname,n._imagePopupCaption.textContent=t.cardname,j((e=O(n),E(i.prototype)),"open",e).call(e)},(u=P(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popup.querySelector(".popup__card-img"),n._imagePopupCaption=n._popup.querySelector(".popup__title-img"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(S);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var B=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this._renderer=e}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.profileNameSelector),this._profileInfo=document.querySelector(e.profileInfoSelector),this._profileAvatar=document.querySelector(e.profileAvatar)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._profileName.textContent,info:this._profileInfo.textContent,avatar:this._profileAvatar.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.avatar,r=t.info;this._profileAvatar.src=n,this._profileName.textContent=e,this._profileInfo.textContent=r}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitHandler=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__save"),n._defaultButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._values={},this._inputList.forEach((function(e){t._values[e.name]=e.value})),this._values}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;V(z(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Сохранение...",t._submitHandler(t._getInputValues())}))}},{key:"setupDefaultText",value:function(){this._submitButton.textContent=this._defaultButtonText}},{key:"close",value:function(){V(z(u.prototype),"close",this).call(this),this._form.reset()}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}var H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.info})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.cardname,link:t.link})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteCardConfirm",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,W(r.key),r)}}function $(t,e){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},$(t,e)}function G(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function K(){return K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},K.apply(this,arguments)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}function W(t){var e=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===J(e)?e:String(e)}var X,Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=Q(r);if(o){var n=Q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===J(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return G(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=G(r=i.call(this,t)),c=function(t){var e=t.card,o=t.cardId;K((n=G(r),Q(u.prototype)),"open",n).call(n),r._element=e,r._cardId=o},(a=W(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._submitFunction=e,r._formDelete=r._popup.querySelector(".popup__form"),r._submitButton=r._formDelete.querySelector(".popup__save"),r._deafaultButtonTextConfirm=r._submitButton.textContent,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;K(Q(u.prototype),"setEventListeners",this).call(this),this._formDelete.addEventListener("submit",(function(e){e.preventDefault(),t._submitButton.textContent="Удаление...",t._submitFunction({card:t._element,cardId:t._cardId})}))}},{key:"setupDefaultTextForConfirm",value:function(){this._submitButton.textContent=this._deafaultButtonTextConfirm}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function Z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return tt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?tt(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var et=new H({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-76",headers:{authorization:"f0266d78-a99a-4c52-847c-13e5ec99372b","Content-Type":"application/json"}}),nt=new x({profileNameSelector:".profile__title",profileInfoSelector:".profile__subtitle",profileAvatar:".profile__avatar"}),rt=new C(".popup_type_img");rt.setEventListeners();var ot=new Y(".popup_type_delete",(function(t){var e=t.card,n=t.cardId;et.deleteCardConfirm(n).then((function(){console.log(e),e.handleRemoveCard(),ot.close()})).catch((function(t){return console.error("Возникла ошибка при удалении карточки ".concat(t))})).finally((function(){return ot.setupDefaultTextForConfirm()}))}));function it(t){var e=new f(t,"#card-template",rt.open,ot.open,(function(t,n){t?(console.log(t),et.deleteLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.error("Возникла ошибка при снятии лайка ".concat(t))}))):et.addLike(n).then((function(t){e.toggleLike(t.likes)})).catch((function(t){return console.error("Возникла ошибка при постановке лайка ".concat(t))}))}),X);return e.generateCard()}ot.setEventListeners();var ut=new B((function(t){ut.addItem(it(t))}),".elements"),at=new U(".popup_type_edit",(function(t){et.setUserInfo(t).then((function(t){nt.setUserInfo({username:t.name,info:t.about,avatar:t.avatar}),at.close()})).catch((function(t){return console.error("Возникла ошибка при редактировании профиля ".concat(t))})).finally((function(){return at.setupDefaultText()}))}));at.setEventListeners();var ct=new U(".popup_type_add",(function(t){Promise.all([et.getInfo(),et.addCard(t)]).then((function(t){var e=Z(t,2),n=(e[0],e[1]);n.myid=X,ut.addItem(it(n)),ct.close()})).catch((function(t){return console.error("Возникла ошибка при добавлении карточки ".concat(t))})).finally((function(){return ct.setupDefaultText()}))}));ct.setEventListeners();var lt=new U(".popup_type_avatar",(function(t){et.setNewAvatar(t).then((function(t){nt.setUserInfo({username:t.name,info:t.about,avatar:t.avatar}),lt.close()})).catch((function(t){return console.error("Возникла ошибка при загрузке аватара ".concat(t))})).finally((function(){return lt.setupDefaultText()}))}));lt.setEventListeners(),e.addEventListener("click",(function(){st.resetValidation(),at.setInputValues(nt.getUserInfo()),at.open()})),n.addEventListener("click",(function(){ft.resetValidation(),ct.open()})),r.addEventListener("click",(function(){pt.resetValidation(),lt.setInputValues(nt.getUserInfo()),lt.open()}));var st=new v(t,o),ft=new v(t,i),pt=new v(t,u);st.enableValidation(),ft.enableValidation(),pt.enableValidation(),Promise.all([et.getInfo(),et.getInitialCards()]).then((function(t){var e=Z(t,2),n=e[0],r=e[1];X=n._id,nt.setUserInfo({username:n.name,info:n.about,avatar:n.avatar}),ut.renderItems(r)})).catch((function(t){return console.error("Ошибка при загрузке начальных данных страницы ".concat(t))}))})();