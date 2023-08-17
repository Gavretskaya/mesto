export default class Section {
  constructor ({items, renderer }, containerSelector) {
    this._container = document.querySelector(containerSelector);
    this._initialCard = items;
    // ??? свойство публичное делать или нет?
    this.renderer = renderer
  }

  addCardFromMASSIV() {
    this._initialCard.forEach(element => {
      this.addItem(this.renderer(element))
    });
  }

  addItem(elementDom) {
    this._container.prepend(elementDom);
  }
}