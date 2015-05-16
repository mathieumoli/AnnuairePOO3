'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('MainCtrl', ['$scope', '$http', '$routeParams','Data',function ($scope, $http, $routeParams,Data) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Data.getUsers(0,function(data){$scope.users=data},function(data){})
        Data.getProjects(0,function(data){$scope.projects=data},function(data){})
    }]);


