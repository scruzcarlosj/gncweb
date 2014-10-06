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


gncweb.directive('ngConfirmClick', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                var message = attrs.ngConfirmMessage;
                if (message && confirm(message)) {
                    scope.$apply(attrs.ngConfirmClick);
                }
            });
        }
    };
}]);

gncweb.run(function($rootScope){
	//API Urls
	$rootScope.API_SECTOR_URL = 'api/sectors';
	
	//Default messages
	$rootScope.CREATE_SUCCESS_MESSAGE = 'Cadastro realizado com sucesso';
	$rootScope.UPDATE_SUCCESS_MESSAGE = 'Alteração realizado com sucesso';
	$rootScope.REMOVE_SUCCESS_MESSAGE = 'Registro removido com sucesso';
	
	$rootScope.$on('addSuccessMessage', function(event, message){
		$.gritter.add({
			title: 'Sucesso',
			text: message,
			class_name: 'gritter-light'
		});
	});
	
});