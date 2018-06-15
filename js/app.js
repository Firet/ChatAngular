angular.module("primerProyecto", ['ui.router'])
.run(function($state){
	console.log("angular is running");
})
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("home", {
			url: "/home",
			templateUrl: "templates/home.html",
			controller: "homeCtrl"
		});
	$urlRouterProvider.otherwise("/home");
});
