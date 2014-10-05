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

gncweb.directive('ngConfirmClick' [function(){
	restrict = 'A';
	replace = false;
	link = function($scope, $element, $attr){
		msg = $attr.ngConfirmClick || "Are you sure?"
		clickAction = $attr.confirmedClickAction;

		$element.bind('click', function(event){
			if(window.confirm(msg)) $scope.$eval(clickAction);
		});
	};
}]); 
