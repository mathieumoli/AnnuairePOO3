'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
    .controller('AfficheCtrl', ['$scope', '$http', '$routeParams','Affiche', function ($scope, $http, $routeParams,Affiche) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        Affiche.getCurrentUser($routeParams.userId,function(data){$scope.CurrentUser=data},function(data){});
        Affiche.getRoleUser($routeParams.userId,function(data){$scope.roles=data; var i=0;
            angular.forEach($scope.roles.role,function(role){$scope.ProjectsId[i]=role.ProjectId;i+=1;}
            )},function(data){});
        var i=0;
        angular.forEach($scope.ProjectsId,function(projectId){
            Affiche.getProjects(projectId,function(data){$scope.projects[i]=data},function(data){});
            $scope.i+=1;})
        //Affiche.getUsersOfProject(roles.ProjectId,function(data){$scope.team=data},function(data){});


    }]);
