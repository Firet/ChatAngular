

angular.module("primerProyecto", [])
.run(() => {

})
.config(($stateProvider, $urlRouterProvider) => {
	$stateProvider
		.state("home", {
			url: "/home",
			templateUrl: "templates/home.html",
			controller: "homeCtrl"
		});
	$urlRouterProvider.otherwise("/home");
});
