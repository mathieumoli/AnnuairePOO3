'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('DeleteCtrl', ['$scope', '$http', '$routeParams','Suppression', function ($scope, $http, $routeParams,Suppression) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        Suppression.getUsers(0,function(data){$scope.users=data},function(data){})
        Suppression.getProjects(0,function(data){$scope.projects=data},function(data){})
        Suppression.getRoles(0,function(data){$scope.roles=data},function(data){})


        $scope.deleteUser=function(user){

            Suppression.deleteUser(user,function(data){},function(data){});

        }

        <!-- marche pas -->
        $scope.deleteRole=function(user,role){
            Suppression.deleteRole(user,role,function(data){},function(data){});
        }


        $scope.deleteProjet=function(project){
            Suppression.deleteProjet(project,function(data){},function(data){});

        }

        $scope.afficherRole=function(user){
            Suppression.afficherRole(user,function(data){$scope.roles = data;},function(data){})


        };
    }]);
