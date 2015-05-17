'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('DeleteCtrl', ['$scope', '$http', '$routeParams', 'Suppression', 'Data', function ($scope, $http, $routeParams, Suppression, Data) {
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

        Data.getRoles(0, function (data) {
            $scope.roles = data
        }, function (data) {
        })

        $scope.getUser = function () {
            Data.getUsers(0, function (data) {
                $scope.users = data
            }, function (data) {
            })
        }
        $scope.getProject = function () {
            Data.getProjects(0, function (data) {
                $scope.projects = data
            }, function (data) {
            })
        }
        $scope.getRoles = function () {
            Data.getRoles(0, function (data) {
                $scope.roles = data
            }, function (data) {
            })
        }


        $scope.deleteUser = function (user) {

            Suppression.deleteUser(user, function (data) {
            }, function (data) {
            });

        }

        $scope.afficherRole = function (user, project) {
            Suppression.getRolebyUserandProject(user, project, function (data) {
                    $scope.role = data[0];
                }
                , function (data) {
                });
        }
        $scope.deleteRole = function (role) {
            Suppression.deleteRole(role, function (data) {
            }, function (data) {
            });
        }


        $scope.deleteProjet = function (project) {
            Suppression.deleteProjet(project, function (data) {
            }, function (data) {
            });

        }

        $scope.afficherProjet = function (user) {
            Suppression.getProjectOfUser(user.id, function (data) {
                $scope.projectsUser = data
            }, function (data) {
            });
        }

    }]);
