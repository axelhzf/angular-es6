class Controller {
  constructor ($scope) {
    this.$ = $scope;
    this.exposeMethodsToScope();
  }

  exposeMethodsToScope () {
    for (var prop in this) {
      if (typeof this[prop] === 'function') {
        this.$[prop] = this[prop].bind(this)
      }
    }
    var watch = this.watch;
    if (watch) {
      for (var key in watch) {
        this.$.$watch(key, watch[key].bind(this))
      }
    }
  }

}

module.exports = Controller;