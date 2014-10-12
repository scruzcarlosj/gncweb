var loginModule = angular.module('gncweb.login', ['ngRoute', 'ngResource']);

loginModule.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/login', {
		templateUrl: 'partials/pages/security/login.html',
		controller: 'LoginController'
	});
});


loginModule.run(function($rootScope){
	$rootScope.API_SECURITY_URL = 'api/security';
	
	$rootScope.authenticatedUser = null;
});