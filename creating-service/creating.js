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

angularApp.controller('mainController', ['$scope', '$log',
    function ($scope, $log) {

        $scope.name = 'Main';
        $log.main = 'Property from main';
        $log.log($log);
        $log.$log($scope);
        
    }]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams',
    function ($scope, $log, $routeParams) {

        $scope.num = $routeParams.num || 1;
        
        $log.second = 'Property from second';
        $log.log($log);
        $log.$log($scope);

    }]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams',
    function ($scope, $log, $routeParams) {

        $scope.name = 'Second';

    }]);