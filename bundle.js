(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const View = require("./view.js");
const CONSTANTS = {
  "NAME": "Bob",
  "TEMPLATE": "<p>This is a view!</p>"
};

const myView = new View(CONSTANTS.NAME, "body", CONSTANTS.TEMPLATE);
myView.render();

},{"./view.js":2}],2:[function(require,module,exports){
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
      el.innerHTML = this._template;
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
