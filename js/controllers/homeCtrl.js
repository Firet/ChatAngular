angular.module("primerProyecto")
.controller('homeCtrl', function($scope) {
    var nombre = "joa";
    let contactos = [{
        nombre: "damian"
    },{
        nombre: nombre
    },{
        nombre: "pepe"
    }];
    
    $scope.usuarios = contactos;
    $scope.mostrarNombre = function(index){
        alert(contactos[index].nombre);
    }
});