angular.module("primerProyecto")
.controller('homeCtrl', function($scope, $state, $http, ApiService) {
    $scope.mostrarNombre = function(index){
        alert($scope.usuarios[index].name.first);
    }
    $scope.usuarios = [];

    ApiService.getUsers().then((data) => {
      $scope.usuarios=data;
    }, (error) => {
      console.log(error)
    });
});

//TODO: INVESTIGAR MODULO $STATE PARA PASAR DATOS A LA SIGUIENTE PANTALLA/CONTROLADOR