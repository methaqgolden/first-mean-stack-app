angular.module("myApp").directive("myNav", function () {
	return {
		restrict: "E",
		templateUrl: "../view/navbar.html",
		link: function (scope, element, attr) {
			var colors = ["#424242", "#607D8B"];
			var index = 0;
			scope.changeColor = function () {
				index = Math.floor(Math.random() * colors.length);
				console.log(colors[index])
				document.querySelector("nav").style.backgroundColor = colors[index];
			}

		}
	}
})
