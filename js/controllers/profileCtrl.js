angular.module("primerProyecto")
.controller('profileCtrl', function($scope, $state, $stateParams) {
    $scope.user = $stateParams.user;
    console.log($scope.user)
});

//TODO: INVESTIGAR COMO RECUPERAR LA DATA RECIBIDA EN EL $STATE.