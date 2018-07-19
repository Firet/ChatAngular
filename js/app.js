angular.module("primerProyecto", ['ui.router'])
.run(function($state){
	console.log("angular is running");
})
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("app", {
			url: "/app",
			templateUrl: "templates/app.html",
			view:{
				"home":{
					templateUrl: "templates/home.html",
					controller: "homeCtrl"
				},
				"details":{
					templateUrl: "templates/details.html",
					controller: "detailsCtrl"
				}
			}
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
