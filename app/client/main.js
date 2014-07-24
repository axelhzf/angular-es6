require("traceur-runtime");
var angular = require("angular");

var app = angular.module("app", []);
var HelloWorldDirective = require("./directives/HelloWorldDirective")
app.controller("MainController", require("./controllers/MainController"));
app.directive("helloWorld", function () {
  return new HelloWorldDirective();
});