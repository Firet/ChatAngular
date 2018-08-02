angular.module("primerProyecto", ['ui.router'])
.run(function($state){
	console.log("angular is running");
})
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("app", {
			url: "/app",
			templateUrl: "templates/home.html",
			controller: "homeCtrl",
		})
		.state("profile", {
			url: "/profile",
			templateUrl: "templates/profile.html",
			controller: "profileCtrl",
			params: {
				user: {
					name:{
						first: "example"
					}
				}
			}
		});
	$urlRouterProvider.otherwise("/app");
});
