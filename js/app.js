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
		})
		.state("profile", {
			url: "/profile",
			templateUrl: "templates/profile.html",
			controller: "profileCtrl"
		});
	$urlRouterProvider.otherwise("/home");
});
