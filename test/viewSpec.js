const View = require("../view.js");
const CONSTANTS = {
  "NAME": "Bob",
  "TEMPLATE": "<p>This is a view!</p>"
};

describe("Given a View", () => {
  let myView;
  beforeEach( () => {
    myView = new View(CONSTANTS.NAME, "body", CONSTANTS.TEMPLATE);
  });
  afterEach( () => {
    myView = null;
  });
	it("is defined", () => {
		expect(View).toBeDefined();
	});
  it("an instance can be created", () => {
		expect(myView).toBeDefined();
	});
  it("can get a name", () => {
		expect(myView.name).toEqual(CONSTANTS.NAME);
	});
  it("can set a name", () => {
    myView.name = "Bubba";
		expect(myView.name).toEqual("Bubba");
	});

});
