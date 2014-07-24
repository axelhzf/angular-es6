var Controller = require("../lib/Controller");
var Counter = require("../lib/Counter");

class MainController extends Controller {
  constructor ($scope) {
    super($scope);
    this.$.message = "wait for it";
    this.$.counter = new Counter();
  }

  clickButton () {
    this.$.message = "change!";
  }

  get watch () {
    return {"message" : this.onChangeMessage};
  }

  onChangeMessage (newValue, oldValue) {
    console.log(`var message change ${oldValue} -> ${newValue}`);
  }
}

module.exports = MainController;