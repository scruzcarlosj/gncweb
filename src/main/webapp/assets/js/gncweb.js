var gncweb = angular.module('gncweb', ['ngRoute', 'ngResource', 'chieffancypants.loadingBar', 'ngAnimate']);

gncweb.config(function($routeProvider, $locationProvider, cfpLoadingBarProvider){
	$locationProvider.html5Mode(false).hashPrefix('!');
	
	cfpLoadingBarProvider.includeSpinner = true;
	
	$routeProvider.when('/pesquisar/setor', {
		controller: 'SectorController',
		templateUrl: 'partials/pages/sector/searchSector.html'});
	
	$routeProvider.when('/cadastrar/setor', {
		controller: 'SectorController',
		templateUrl: 'partials/pages/sector/createSector.html'});
	
	$routeProvider.when('/editar/setor/:id', {
		controller: 'SectorController',
		templateUrl: 'partials/pages/sector/createSector.html'});
	
});