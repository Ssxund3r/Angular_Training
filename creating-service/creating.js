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

angularApp.controller('mainController', ['$scope', '$log', 'nameService',
    function ($scope, $log, nameService) {

        $scope.name = 'Main';
        $scope.name = nameService.name;

        $log.main = 'Property from main';

        $log.log(nameService.name);
        $log.log(nameService.nameLenght());

        $scope.$watch('name', function () {

            nameService.name = $scope.name;
        });

    }]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService',
    function ($scope, $log, $routeParams, nameService) {

        $scope.num = $routeParams.num || 1;

        $log.second = 'Property from second';
        $log.log($log);
        $log.$log($scope);

        $scope.name = nameService.name;

    }]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams',
    function ($scope, $log, $routeParams) {

        $scope.name = 'Second';

    }]);

angularApp.service('nameService', function () {
    var self = this;

    this.name = 'Gabriel Costa';
    this.nameLenght = function () {

        return self.name.length;
    }
});