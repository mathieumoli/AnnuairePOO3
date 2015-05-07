'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('DeleteCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
            .success(function(data) {
                $scope.users = data.data;
            });

        $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
            .success(function(data) {
                $scope.projects = data.data;
            });

        if($routeParams.userId) {
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
                .success(function(data) {
                    if (data.status == "success") {
                        $scope.currentUser = data.data;
                    }
                });
        }

        $scope.deleteUser=function(user){

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Suppression de l\'utilisateur fait !');
                        success(data.data)
                    } else {
                        alert('IMPOSSIBLE de faire la suppression de l\'utilisateur !');
                        error(data.data);
                    }

                });

        }
        <!-- marche pas -->
        $scope.deleteRole=function(role){

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/'+role.id)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Suppression du role de l\'utilisateur fait !');
                        success(data.data)
                    } else {
                        alert('IMPOSSIBLE de faire la suppression du role de l\'utilisateur !');
                        error(data.data);

                    }

                });

        }


        $scope.deleteProjet=function(project){

            $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+project.id)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Suppression du projet fait !');
                        success(data.data)
                    } else {
                        alert('IMPOSSIBLE de faire la suppression du projet !');
                        error(data.data);
                    }

                });

        }

        $scope.afficherRole=function(user){
            $scope.currentUser=user;
            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id+'/Roles')
                .success(function(data)
                {
                    if (data.status === "success") {
                        $scope.roles = data.data;
                    }

                });

        };
    }]);
