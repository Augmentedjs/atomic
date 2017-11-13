"use strict";
const View = require("./view.js");

class List extends View {
  constructor(name, el, template) {
    super(name, el, template);
  };

  createList() {
    const item_array = this._template;
    const list = document.createElement("ul");
    const el = document.querySelector(this._el);
    let i;

    for(i = 0; i < item_array.length; i++) {
      let item = document.createElement("li");
      item.append(item_array[i]);
      list.append(item);
    }
    el.append(list);
  };

};

module.exports = List;
