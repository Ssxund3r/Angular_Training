// Módulo
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$timeout',
    function ($scope, $log, $timeout) {

        $scope.name = 'Gabriel Costa';

        $timeout(function () {

            $scope.name = 'Todos';
            
        }, 3000);

    }]);