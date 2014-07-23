# angular.js + ES6 + Browserify

This is an example of how to use angular + es6 + Browserify


## Controllers

```js
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
```

## Directives

```js
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
```
