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

        var rulesrequest = new XMLHttpRequest();
        rulesrequest.onreadystatechange = function () {
            $scope.$apply(function () {
                if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                    $scope.rules = JSON.parse(rulesrequest.responseText);
                }
            });
        }

        rulesrequest.open("GET", "http://localost:54765/api", true);
        rulesrequest.send();
    }]);