'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('AddCtrl', ['$scope', '$http', '$routeParams','Ajout', function ($scope, $http, $routeParams,Ajout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Ajout.getUsers(0,function(data){$scope.users=data},function(data){})
        Ajout.getProjects(0,function(data){$scope.projects=data},function(data){})


        $scope.addUser=function(user){
            Ajout.addUser(user);


        }
        <!-- marche pas -->
        $scope.addRole=function(role){
            Ajout.addRole(role);


        }


        $scope.addProjet=function(project){
            Ajout.addProjet(project);


        }

        $scope.afficherRole=function(user){
            Ajout.afficherRole(user);


        };
    }]);
