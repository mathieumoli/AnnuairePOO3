'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('EditCtrl', ['$scope', '$http', '$routeParams', 'Modification', 'Data', function ($scope, $http, $routeParams, Modification, Data) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Data.getUsers(0, function (data) {
            $scope.users = data
        }, function (data) {
        })
        Data.getProjects(0, function (data) {
            $scope.projects = data
        }, function (data) {
        })

        $scope.modifierUser = function (user) {

            Modification.modifierUser(user, function (data) {
            }, function (data) {
            })

        }

        $scope.afficherProjet = function (user) {
            Modification.getProjectOfUser(user.id, function (data) {
                $scope.projectsUser = data
            }, function (data) {
            });
        }

        $scope.afficherRole = function (user, project) {
            Modification.getRolebyUserandProject(user, project, function (data) {
                    $scope.role = data[0];
                }
                , function (data) {
                });

        }


        $scope.modifierRole = function (nom) {

                $scope.role.name = nom;
                Modification.modifierRole($scope.role, function (data) {
                }, function (data) {
                })

        }


        $scope.modifierProjet = function (project) {
            if (project.year < 1) {
                alert("c'est un projet qui a eu lieu avant JC ? Impossible de l'ajouter")
            } else {

                Modification.modifierProjet(project, function (data) {
                }, function (data) {
                })
            }

        }

        $scope.afficherRolebyUser = function (user) {

            Modification.afficherRolebyUser(user, function (data) {
                $scope.roles = data;
            }, function (data) {
            })


        };
    }]);
