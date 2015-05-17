'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('AfficheCtrl', ['$scope', '$http', '$routeParams', 'Affiche', function ($scope, $http, $routeParams, Affiche) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        Affiche.getCurrentUser($routeParams.userId, function (data) {
            $scope.CurrentUser = data
        }, function (data) {
        });

        Affiche.getRolebyUser($routeParams.userId, function (data) {
            $scope.roles=new Array();

            $scope.roles = data;
            //MARCHE PAS
            for(var i=0;i<$scope.roles.length;i++){
                $scope.roles[i].ProjectTitle='initial';
                $scope.getProject($scope.roles[i]);

            }

        }, function (data) {
        });

        Affiche.getProjectbyUser($routeParams.userId, function (data) {
            $scope.projectsforUser = data;
        }, function (data) {
        });

        $scope.getProject=function(role)
        {
            Affiche.getProject(role, function (data) {
                role.ProjectTitle = data.title;
            }, function (data) {
            })
        }
    }]);
