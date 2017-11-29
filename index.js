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
myList.add('peanuts', 'ul');
myList.render();


const l = 15;
let i = 0;

for (i = 0; i < l; i++) {
 myList.add(`list num${i}`, "ul");
}
myList.render();
