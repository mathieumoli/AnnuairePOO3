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

        $scope.addRole=function(role,user,project){
            role.UserId=user.id;
            role.ProjectId=project.id;
            Ajout.addRole(role,function(data){},function(data){});


        }


        $scope.addProjet=function(project){
            Ajout.addProjet(project);


        }

        $scope.afficherRole=function(user){
            Ajout.afficherRole(user);


        };
    }]);
