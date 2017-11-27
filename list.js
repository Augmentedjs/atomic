"use strict";
const View = require("./view.js");

class List extends View {
  constructor(name, el, list) { //pass in list instead of template
    super(name, el, ""); //no need to pass template you will remove and change. Use ""
    // hist : if
    this._list = list;
  };

  /*
   * just a hint :)
   *
   * add(item) {
   *   this._list.push(item);
   *   this._refresh();
   * };
   *
   */
  add(item, list_type) {
    this._list.push(item);
    this._refresh(list_type);
  };

  set list(list) {
    this._list = list;
  };

  get list() {
    return this._list;
  };

  _refresh(list_type) {
    this._template = "<${list_type}>";
    for(i = 0; i < this._list.length; i++) {
      this._template += "<li>${this._list[i]}</li>";
    }
    this._template += "</${list_type}>";
    this._el.append = this._template;
  }

  /* hint 2 :)
   *
   * _refresh() {
   *   // refresh the list with an iterator.  as in simular to you createList function but to _template
   *   this._template = "<ul>";
   *   for (i = 0; i < this._list.length; i++) {
   *     this._template += `<li>${this._list[i]}`;
   *   }
   *   this._template += "</ul>";
   * };
   */

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
