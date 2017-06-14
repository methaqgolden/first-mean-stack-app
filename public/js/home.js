var app = angular.module("app.home", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "../view/home.html",
        controller: "homeCtrl"
    })
})
app.controller("homeCtrl", function ($scope) {
    $scope.names = [
        {
            name: "Al Sumaria Civilization",
            age: 6500,
            description: "",
            location: "Thee Qar city-Iraq",
            img: "http://www.crystalinks.com/ziggurat_ur.jpg"
                },
        {
            name: "Al Assyrian Civilization",
            age: 5000,
            description: "",
            location: "Al Mousel city-Iraq",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Hatra_ruins.jpg"
                },
        {
            name: "Al Babylonian Civilization",
            age: 4800,
            description: "",
            location: "Babyl city-Iraq",
            img: "https://dorar.at/imup/img1/1329932833423373_101505589363012.jpg"
                },
        {
            name: "Al Islamic Civilization",
            age: 1500,
            description: "",
            location: "Baghdad city-Iraq",
            img: "http://www.abualsoof.com/inp/Upload/26162049_1381720_1157555980923552_2432855448304517601_n.jpg"
                }
            
            ]
})