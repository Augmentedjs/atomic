const View = require("./view.js");
const CONSTANTS = {
  "NAME": "Bob",
  "TEMPLATE": "<p>This is a view!</p>"
};

const MYCONSTANTS = {
  "NAME": "Karen",
  "TEMPLATE": "<span>This is a span tag.</span>"
}

const myView = new View(CONSTANTS.NAME, "body", CONSTANTS.TEMPLATE);
myView.render();

const myOtherView = new View(MYCONSTANTS.NAME, "body", MYCONSTANTS.TEMPLATE);
myOtherView.render();
