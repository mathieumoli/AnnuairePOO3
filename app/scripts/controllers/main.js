'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('MainCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
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

        $scope.modifierUser=function(user){

            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id,user)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Modification de l\'utilisateur faite !');
                        success(data.data)
                    } else {
                        error(data.data);
                    }

                });

        }

        $scope.modifierRole=function(role){

            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/'+role.id,role)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Modification du role de l\'utilisateur faite !');
                        success(data.data)
                    } else {
                        error(data.data);
                    }

                });

        }


        $scope.modifierProjet=function(project){

            $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'+project.id,project)
                .success(function(data)
                {
                    if (data.status === 'success') {
                        alert('Modification du projet faite !');
                        success(data.data)
                    } else {
                        error(data.data);
                    }

                });

        }

        $scope.afficherRole=function(user){

            $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'+user.id+'/Roles')
                .success(function(data)
                {
                    if (data.status === "success") {
                        $scope.roles = data.data;
                    }

                });

        };
    }]);


