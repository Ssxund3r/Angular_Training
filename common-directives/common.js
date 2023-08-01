// Módulo
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter',
    function ($scope, $filter) {
        $scope.handle = '';

        $scope.lowercasehandle = function () {
            return $filter('lowercase')($scope.handle);
        }

        $scope.characters = 5;

        $scope.rules = [
            {rulename: "Deve ter 5 caracteres"},
            {rulename: "Não deve ser usado em outro lugar"},
            {rulename: "Deve ser legal"}
        ];
        
        console.log($scope.rules);

    }]);