const View = require("./view.js");
const CONSTANTS = {
  "NAME": "Bob",
  "TEMPLATE": "<p>This is a view!</p>"
};

const myView = new View(CONSTANTS.NAME, "body", CONSTANTS.TEMPLATE);
myView.render();
