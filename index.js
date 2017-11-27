const View = require("./view.js");
const List = require("./list.js");

const CONSTANTS = {
  "NAME": "Karen",
  "TEMPLATE": "<span>This is a span tag.</span>"
}

const list_arr = ["oranges", "apples", "kiwis"];
const list_arr2 = ["oranges", "grapes", "kiwis"];

const myView = new View(CONSTANTS.NAME, 'body', CONSTANTS.TEMPLATE);
const myList = new List("Karen's List", 'body', list_arr);
const myList2 = new List("Another List", 'body', list_arr2);

myView.render();
myList.add();
//myList.createList();
//myList2.createList();
