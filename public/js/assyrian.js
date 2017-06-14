var app = angular.module("app.assyrian", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/assyrian", {
        templateUrl: "./view/assyrian.html",
        controller: "assyrianCtrl"
    })
})
app.controller("assyrianCtrl", function ($scope) {
    
})
