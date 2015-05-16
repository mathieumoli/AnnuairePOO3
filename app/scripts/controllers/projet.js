/**
 * Created by webdev on 4/4/15.
 */
angular.module('showcaseApp')
    .controller('ProjectCtrl', ['$scope', '$http', 'Projet', function ($scope, $http, Projet) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Projet.getProjects(0, function (data) {
            $scope.projects = data;
        }, function (data) {
        });

        $scope.getUsersOfProject = function (project) {
            $scope.team = new Array();
            $scope.roles = new Array();
            Projet.getUsersOfProject(project, function (data) {
                $scope.team = data;
                for (var i = 0; i < $scope.team.length; i++) {

                    Projet.getRolebyUserandProject($scope.team[i], project, function (data) {
                            $scope.roles = data;
                        }
                        , function (data) {
                        });


                }
            }, function (data) {
            });


        }

    }])
