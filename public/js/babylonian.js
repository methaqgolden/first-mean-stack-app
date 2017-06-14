var app = angular.module("app.babylonian", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/babylonian", {
        templateUrl: "./view/babylonian.html",
        controller: "babylonianCtrl"
    })
})
app.controller("babylonianCtrl", function ($scope) {
    
})
