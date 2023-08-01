// Módulo
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope',
    function ($scope) {

        $scope.alertClick = function () {
            alert("Clicou!");
        }

        $scope.name = 'Gabriel C';

    }]);