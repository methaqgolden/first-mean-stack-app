var app = angular.module("myApp", ["ngRoute", "app.home", "app.assyrian", "app.babylonian", "app.contact", "app.islamic", "app.sumaria"])
app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

})
app.controller("mainCtrl", function ($scope) {

})

