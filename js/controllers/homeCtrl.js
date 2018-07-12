angular.module("primerProyecto")
.controller('homeCtrl', function($scope, $state, $http, ApiService) {
    $scope.goToProfile = function(index){
        $state.go('profile', { user: $scope.usuarios[index] });
    }
    $scope.usuarios = [];

    ApiService.getUsers().then((data) => {
      $scope.usuarios=data;
    }, (error) => {
      console.log(error)
    });
});