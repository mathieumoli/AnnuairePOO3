/**
 * Created by webdev on 4/4/15.
 */
angular.module('showcaseApp')
  .controller('ProjectCtrl', ['$scope', '$http','Projet', function($scope, $http,Projet) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      Projet.getProjects(0,function(data){$scope.projects=data;},function(data){})

    $scope.getUsersOfProject=function(project) {
      Projet.getUsersOfProject(project, function (data) {
        $scope.team = data
      }, function (data) {
      })
    }

  }])
