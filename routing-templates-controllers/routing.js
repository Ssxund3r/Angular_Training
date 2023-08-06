// Módulo
var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templaUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templaUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templaUrl: 'pages/second.html',
            controller: 'secondController'
        })
});

angularApp.controller('secondController', ['$scope', '$log', '$routeParams',
    function ($scope, $log, $routeParams) {

        $scope.num = $routeParams.num || 1;

    }]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams',
    function ($scope, $log, $routeParams) {

        $scope.name = 'Second';

    }]);

angularApp.controller('mainController', ['$scope', '$log',
    function ($scope, $log) {
        $scope.name = 'Main';
    }]);