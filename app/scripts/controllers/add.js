'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('AddCtrl', ['$scope', '$http', '$routeParams','Ajout','Data', function ($scope, $http, $routeParams,Ajout,Data) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Data.getUsers(0,function(data){$scope.users=data},function(data){})
        Data.getProjects(0,function(data){$scope.projects=data},function(data){})

        $scope.addUser=function(user){
            Ajout.addUser(user);

        }

        $scope.addRole=function(role,user,project) {

            if (user.id ==null ) {
                alert('Vous devez selectionner un utilisateur');
            } else {
                if (project.id == null) {
                    alert('Vous devez selectionner un projet')
                } else {


                    role.UserId = user.id;
                    role.ProjectId = project.id;
                    Ajout.addRole(role, function (data) {
                    }, function (data) {
                    });
                }
            }
        }


        $scope.addProjet=function(project){
            if(project.year<1){
                alert("c'est un projet qui a eu lieu avant JC ? Impossible de l'ajouter")
            }else {
                Ajout.addProjet(project);
            }
        }

    }]);
