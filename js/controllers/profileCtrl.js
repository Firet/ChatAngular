angular.module("primerProyecto")
.controller('profileCtrl', function($scope, $state, $stateParams) {
    $scope.user = $stateParams.user;
    console.log($scope.user)
    moment.locale("es");
    $scope.nuevaFecha = moment($scope.user.registered.date).format("LL");
    console.log($scope.nuevaFecha);

});

//TODO: INVESTIGAR COMO RECUPERAR LA DATA RECIBIDA EN EL $STATE.