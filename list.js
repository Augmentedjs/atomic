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
        xhr.open("GET", url);

        xhr.onload = function() {
          const data = xhr.response;
          const jsonResponse = JSON.parse(data);

          if (xhr.status === 200) {
          // If successful, resolve the promise by passing back the request response
            console.log(jsonResponse);
            resolve(jsonResponse);
          } else {
          // If it fails, reject the promise with a error message
            reject(Error('Image didn\'t load successfully; error code:' + xhr.statusText));
          }
        };

        //xhr.setRequestHeader('Content-type', 'text/xml');
        //xhr.onload = () => resolve(jsonResponse);
        xhr.onerror = function() {
      // Also deal with the case when the entire request fails to begin with
      // This is probably a network error, so reject the promise with an appropriate message
          reject(Error('There was a network error.'));
        };
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
