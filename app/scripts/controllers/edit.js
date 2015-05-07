'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('EditCtrl', ['$scope', '$http', '$routeParams','Modification', function ($scope, $http, $routeParams,Modification) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Modification.getUsers(0,function(data){$scope.users=data},function(data){})
        Modification.getProjects(0,function(data){$scope.projects=data},function(data){})


        $scope.modifierUser=function(user){

        Modification.modifierUser(user,function(data){},function(data){})

        }

        $scope.modifierRole=function(role){

            Modification.modifierRole(role,function(data){},function(data){})
        }


        $scope.modifierProjet=function(project){

            Modification.modifierProjet(project,function(data){},function(data){})

        }

        $scope.afficherRole=function(user){

            Modification.afficherRole(user,function(data){$scope.roles = data;},function(data){})


        };
    }]);
