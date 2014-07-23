require("traceur-runtime");
var angular = require("angular");

var app = angular.module("app", []);
var MainController = require("./MainController");
var HelloWorldDirective = require("./HelloWorldDirective");

app.controller("MainController", MainController);
app.directive("helloWorld", function () {
  return new HelloWorldDirective();
});