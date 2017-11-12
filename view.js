"use strict";

class View {
  constructor(name, el, template) {
    this._name = (name) ? name : "my-view";
    this._el = el;
    this._template = template;
    console.log(this._name, this._el, this._template);
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
