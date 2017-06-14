var app = angular.module("app.islamic", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/islamic", {
        templateUrl: "./view/islamic.html",
        controller: "islamicCtrl"
    })
})
app.controller("islamicCtrl", function ($scope) {
    
})
