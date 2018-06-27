angular.module("primerProyecto")
.factory('ApiService', function($http, $q) {

    var ApiService = {};
    const CANTIDAD_USUARIOS = 50;

    ApiService.getUsers = function(){
        return $q(function(resolve, reject){
            $http.get("https://randomuser.me/api/?results=" + CANTIDAD_USUARIOS).then(function(result){
                if(result.error){
                    reject(result.error)
                }
                resolve(result.data.results)
            }, function(error){
                reject(error)
            })
        })
    }
    
    return ApiService;
});