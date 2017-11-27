"use strict";
const View = require("./view.js");

class List extends View {
  constructor(name, el, list) { //pass in list instead of template
    super(name, el, ""); //no need to pass template you will remove and change. Use ""
    this._list = list;
  };

  add() {
    list(['apples','orange']);
    console.log(list);
  };

  set list(list) {
    this._list = list;
  };

  get list() {
    return this._list;
  };

  // createList() {
  //
  //   console.log(this._list);
  //   const item_array = this._list;
  //   const list = document.createElement("ul");
  //   const el = document.querySelector(this._el);
  //   let i;
  //
  //   for(i = 0; i < item_array.length; i++) {
  //     let item = document.createElement("li");
  //     item.append(item_array[i]);
  //     list.append(item);
  //   }
  //   el.append(list);
  // };

};

module.exports = List;
