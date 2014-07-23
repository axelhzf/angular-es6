class Directive {
  constructor() {
    this.link = this.link.bind(this);
  }

  link (scope, element, attrs) {
    this.$ = scope;
    this.element = element;
    this.attrs = attrs;

    for (var prop in this) {
      if (typeof this[prop] === 'function' && prop !== "link") {
        this.$[prop] = this[prop].bind(this)
      }
    }
  }
}

module.exports = Directive;