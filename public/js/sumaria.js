var app = angular.module("app.sumaria", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/sumaria", {
        templateUrl: "./view/sumaria.html",
        controller: "sumariaCtrl"
    })
})
app.controller("sumariaCtrl", function ($scope) {
    
})
