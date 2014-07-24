# angular.js + ES6 + Browserify

This is an example of how to use angular + es6 + Browserify


## Controllers

```js
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
```

## Directives

```js
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
```


# Todo

* jadeify - use compile instead of compileClient
