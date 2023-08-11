//Module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })

        .when('/forecast/:days', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })   
});

//Services
weatherApp.service('cityService', function () {

    this.city = "Gravataí, RS";
});

//Controllers
weatherApp.controller('homeController', ['$scope', 'cityService', '$routeParams',
    function ($scope, cityService, $routeParams) {

        $scope.city = cityService.city;
        $scope.$watch('city', function () {
            cityService.city = $scope.city;
        })
    }]);

weatherApp.controller('forecastController', ['$scope', 'cityService', '$routeParams',
    function ($scope, cityService, $routeParams) {

        $scope.city = cityService.city;
        
        $scope.days = $routeParams.days || 2;

        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
            { callback: "JSON_CALLBACK" }, { GET: { METHOD: "JSONP" } });

        $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

        console.log($scope.weatherResult);

        $scope.convertToFahrenheit = function (degK) {
            return Math.round((1.8 * (degK - 273)) + 32);
        }

        $scope.convertToDate = function (dt) {
            return new Date(dt * 1000);
        };

    }]);