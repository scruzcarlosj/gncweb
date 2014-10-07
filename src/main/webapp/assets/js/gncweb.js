var gncweb = angular.module('gncweb', ['ngRoute', 'ngResource', 'chieffancypants.loadingBar', 'ngAnimate']);

gncweb.config(function($routeProvider, $locationProvider, cfpLoadingBarProvider){
	
	$locationProvider.html5Mode(false).hashPrefix('!');
	
	cfpLoadingBarProvider.includeSpinner = true;
	
	
	// :::::::::::::: Sector Routes:::::::::::::
	$routeProvider.when('/pesquisar/setor', {
		controller: 'SectorController',
		templateUrl: 'partials/pages/sector/searchSector.html',
		resolve: {
			PageMode: function(SearchMode){return SearchMode;}
		}});
	
	$routeProvider.when('/cadastrar/setor', {
		controller: 'SectorController',
		templateUrl: 'partials/pages/sector/createSector.html',
		resolve: {
			PageMode: function(CreateMode){return CreateMode;}
	}});
	
	$routeProvider.when('/editar/setor/:id', {
		templateUrl: 'partials/pages/sector/createSector.html',
		controller: 'SectorController',
		resolve: {
			PageMode: function(EditMode){return EditMode;}
	}});
	
	$routeProvider.when('/visualizar/setor/:id', {
		templateUrl: 'partials/pages/sector/createSector.html',
		controller: 'SectorController',
		resolve: {
			PageMode: function(ViewMode){return ViewMode;}
	}});
	
	// :::::::::::::: User Routes:::::::::::::
	$routeProvider.when('/cadastrar/usuario', {
		templateUrl: 'partials/pages/user/createUser.html',
		controller: 'UserController',
		resolve: {
			PageMode: function(CreateMode){return CreateMode;},
			Sectors: function($http, $rootScope){
				      return $http.get($rootScope.API_SECTOR_URL).then(function(response){
				    	  return response.data;
				      });
			    	}	
	}});
	
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

gncweb.factory('ViewMode', function(){
	return {
		viewMode: true,
		editMode: false,
		createMode: false,
		searchMode: false
	};
});

gncweb.factory('EditMode', function(){
	return {
		viewMode: false,
		editMode: true,
		createMode: false,
		searchMode: false
	};
});

gncweb.factory('CreateMode', function(){
	return {
		viewMode: false,
		editMode: false,
		createMode: true,
		searchMode: false
	};
});

gncweb.factory('SearchMode', function(){
	return {
		viewMode: false,
		editMode: false,
		createMode: false,
		searchMode: true
	};
});

gncweb.run(function($rootScope){
	//API Urls
	$rootScope.API_SECTOR_URL = 'api/sectors';
	$rootScope.API_USER_URL = 'api/users';
	
	//Default messages
	$rootScope.CREATE_SUCCESS_MESSAGE = 'Cadastro realizado com sucesso';
	$rootScope.UPDATE_SUCCESS_MESSAGE = 'Alteração realizada com sucesso';
	$rootScope.REMOVE_SUCCESS_MESSAGE = 'Registro removido com sucesso';
	
	//Listeners
	$rootScope.$on('addSuccessMessage', function(event, message){
		$.gritter.add({
			title: 'Sucesso',
			text: message,
			class_name: 'gritter-light',
			time: '2500'
		});
	});
});
