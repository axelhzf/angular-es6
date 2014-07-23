var Directive = require("./lib/Directive");

class HelloWorldDirective extends Directive {
  constructor() {
    super();
    this.template = "<h1>Hello world {{message}} {{value}}</h1>";
    this.restrict = "E";
    this.scope = {
      value: "="
    }
  }
  link () {
    super.link.call(this, arguments);
    this.$.message = "muahaha";
  }
}
module.exports = HelloWorldDirective;