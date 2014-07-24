var Directive = require("../lib/Directive");

class HelloWorldDirective extends Directive {
  constructor() {
    super();
    this.template = require("../templates/hello-world.jade");
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