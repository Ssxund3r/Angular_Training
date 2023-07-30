// Módulo
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', 
    function ($scope, $log) {

        $log.info($scope);

    }]);