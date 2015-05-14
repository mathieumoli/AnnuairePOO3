'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('AfficheCtrl', ['$scope', '$http', '$routeParams','Affiche', function ($scope, $http, $routeParams,Affiche) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        Affiche.getCurrentUser($routeParams.userId,function(data){$scope.CurrentUser=data},function(data){});
        Affiche.getRoleUser($routeParams.userId,function(data) {
                $scope.roles = data;
            },function(data){});
        Affiche.getProject($routeParams.userId,function(data){$scope.projectsforUser=data;},function(data){});
    }]);
