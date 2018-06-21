angular.module("primerProyecto")
.controller('homeCtrl', function($scope, $http) {

    let contactos = [{
      name: "damian",
      avatar: "https://vignette.wikia.nocookie.net/dragonball/images/a/a9/Vegeta.png/revision/latest?cb=20180204191902&path-prefix=es"
    },{
      name: "joa",
      avatar: "https://vignette.wikia.nocookie.net/dragonball/images/a/a9/Vegeta.png/revision/latest?cb=20180204191902&path-prefix=es"
    },{
      name: "pepe",
      avatar: "https://vignette.wikia.nocookie.net/dragonball/images/a/a9/Vegeta.png/revision/latest?cb=20180204191902&path-prefix=es"
    }]
    
    $scope.usuarios = contactos;
    $scope.mostrarNombre = function(index){
        alert(contactos[index].nombre);
    }
});