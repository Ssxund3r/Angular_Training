// Módulo
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter',
    function ($scope, $filter) {

        $scope.handle = '';
        
        $scope.lowercasehandle = function () {
            return $filter('lowercase')($scope.handle);
        }

    }]);