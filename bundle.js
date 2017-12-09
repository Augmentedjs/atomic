(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const View = require("./view.js");
const List = require("./list.js");

const CONSTANTS = {
  "NAME": "Karen",
  "TEMPLATE": "<span>This is a span tag.</span><div id='list'></div>"
}

const list_arr = ["oranges", "apples", "kiwis"];
const list_arr2 = ["oranges", "grapes", "kiwis"];

const myView = new View(CONSTANTS.NAME, 'body', CONSTANTS.TEMPLATE);
const myList = new List("Karen's List", 'body', list_arr);
//const myList2 = new List("Another List", 'body', list_arr2);

myView.render();
myList.getListItem("data.json");
myList.add('peanuts', 'ul');
myList.render();


const l = 15;
let i = 0;

for (i = 0; i < l; i++) {
 myList.add(`list num${i}`, "ul");
}
myList.render();

},{"./list.js":2,"./view.js":3}],2:[function(require,module,exports){
"use strict";
const View = require("./view.js");

class List extends View {
  //pass in list instead of template
  // maybe now pass a list type
  constructor(name, el, list) {
    super(name, el, ""); //no need to pass template you will remove and change. Use ""
    this._list = list;
    this.ordered = false; // another API for setting orderd or unordered
    this._refresh("ul");
  };

  getListItem(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const data = xhr.responseText;
        const jsonResponse = JSON.parse(data);
        xhr.open("GET", url, true);
        xhr.setRequestHeader('Content-type', 'text/xml');
        xhr.onload = () => resolve(jsonResponse);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
  };

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
    //const el = document.querySelector(this._el);
    let i = 0;

    this._template = "<" + list_type + ">";

    for(i = 0; i < this._list.length; i++) {
      this._template += "<li>" + this._list[i] + "</li>";
      // same as: this._template += `<li>${this._list[i]}</li>`;
    }

    this._template += "</" + list_type + ">";
    //el.insertAdjacentHTML('beforeend', this._template);
  };

  render() {
    super.render();
  };

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

},{"./view.js":3}],3:[function(require,module,exports){
"use strict";

class View {
  constructor(name, el, template) {
    this._name = (name) ? name : "my-view";
    this._el = el;
    this._template = template;
  };
  /**
  * The name property of the view
  * @property {string} name The Name of the view
  * @memberof View
  * @private
  */

  /**
  * Initializes the view
  * @method initialize
  * @param {object} options Optional options to pass to the view
  * @memberof View
  * @returns {View} Returns "this," as in, this view context
  */
  initialize(options) {
    this.options = options;
    return this;
  };
  /**
  * Render callback for the view
  * @method render
  * @returns this Context of the view
  * @memberof View
  */
  render() {
    const el = document.querySelector(this._el);
    if (el && this._template) {
      el.insertAdjacentHTML('beforeend', this._template);
      //el.innerHTML = this._template;
    }
    return this;
  };

  /**
  * Sets the name of the view
  * @method setName
  * @param {string} name The name of the view
  * @memberof View
  */
  set name(name) {
    this._name = name;
  };
  /**
  * Gets the name of the view
  * @method getName
  * @returns {string} Returns the name of the view
  * @memberof View
  */
  get name() {
    return this._name;
  };
  /**
  * Callback to return if this view can display
  * @method canDisplay
  * @returns {boolean} Returns true if this view can display
  * @memberof View
  */
  canDisplay() {
    return true;
  };
};
module.exports = View;

},{}]},{},[1]);
