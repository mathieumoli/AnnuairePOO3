'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
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


        if($routeParams.userId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });
        }

        $scope.deleteUser=function(user){

            Suppression.deleteUser(user,function(data){},function(data){})

        }
        <!-- marche pas -->
        $scope.deleteRole=function(role){

            Suppression.deleteRole(role,function(data){},function(data){})

        }


        $scope.deleteProjet=function(project){

            Suppression.modifierProjet(project,function(data){},function(data){})

        }

        $scope.afficherRole=function(user){
            Suppression.afficherRole(user,function(data){$scope.roles = data;},function(data){})


        };
    }]);
