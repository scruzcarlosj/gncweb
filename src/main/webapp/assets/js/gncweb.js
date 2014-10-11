var gncweb = angular.module('gncweb', ['ngRoute', 'ngResource', 'chieffancypants.loadingBar', 'ngAnimate', 'gncweb.login']);

gncweb.config(function($routeProvider, $locationProvider, cfpLoadingBarProvider){
	
	$locationProvider.html5Mode(false).hashPrefix('!');
	
	cfpLoadingBarProvider.includeSpinner = true;
	
	
	// :::::::::::::: Sector Routes:::::::::::::
	$routeProvider.when('/pesquisar/setor', {
		controller: 'SectorController',
		templateUrl: 'partials/pages/sector/searchSector.html',
		resolve: {
			PageMode: function(SearchMode){return SearchMode;},
			Sector: function(){return null;}
		}});
	
	$routeProvider.when('/cadastrar/setor', {
		controller: 'SectorController',
		templateUrl: 'partials/pages/sector/createSector.html',
		resolve: {
			PageMode: function(CreateMode){return CreateMode;},
			Sector: function(){return null;}
	}});
	
	$routeProvider.when('/editar/setor/:id', {
		templateUrl: 'partials/pages/sector/createSector.html',
		controller: 'SectorController',
		resolve: {
			PageMode: function(EditMode){return EditMode;},
			Sector: function($http, $rootScope, $route){
			      return $http.get($rootScope.API_SECTOR_URL + '/' + $route.current.params.id).then(function(response){
			    	  return response.data;
			      });
		    	}
	}});
	
	$routeProvider.when('/visualizar/setor/:id', {
		templateUrl: 'partials/pages/sector/createSector.html',
		controller: 'SectorController',
		resolve: {
			PageMode: function(ViewMode){return ViewMode;},
			Sector: function($http, $rootScope, $route){
			      return $http.get($rootScope.API_SECTOR_URL + '/' + $route.current.params.id).then(function(response){
			    	  return response.data;
			      });
		    	}
	}});
	
	// :::::::::::::: User Routes:::::::::::::
	$routeProvider.when('/cadastrar/usuario', {
		templateUrl: 'partials/pages/user/createUser.html',
		controller: 'UserController',
		resolve: {
			PageMode: function(CreateMode){return CreateMode;},
			User : function(){return null;},
			Sectors: function($http, $rootScope){
				      return $http.get($rootScope.API_SECTOR_URL).then(function(response){
				    	  return response.data;
				      });
			    	}	
	}});
	
	$routeProvider.when('/editar/usuario/:id', {
		templateUrl: 'partials/pages/user/createUser.html',
		controller: 'UserController',
		resolve: {
			PageMode: function(EditMode){return EditMode;},
			User : function($http, $rootScope, $route){
			      return $http.get($rootScope.API_USER_URL + '/' + $route.current.params.id).then(function(response){
			    	  return response.data;
			      });
		    	},
			Sectors: function($http, $rootScope){
			      return $http.get($rootScope.API_SECTOR_URL).then(function(response){
			    	  return response.data;
			      });
		    	}	
	}});
	
	$routeProvider.when('/visualizar/usuario/:id', {
		templateUrl: 'partials/pages/user/createUser.html',
		controller: 'UserController',
		resolve: {
			PageMode: function(ViewMode){return ViewMode;},
			User : function($http, $rootScope, $route){
			      return $http.get($rootScope.API_USER_URL + '/' + $route.current.params.id).then(function(response){
			    	  return response.data;
			      });
		    	},
	    	Sectors: function(){return null;}
	}});
	
	$routeProvider.when('/pesquisar/usuario', {
		templateUrl: 'partials/pages/user/searchUser.html',
		controller: 'UserController',
		resolve: {
			PageMode: function(ViewMode){return ViewMode;},
			User : function(){return null;},
	    	Sectors: function(){return null;}
	}});
	
	
	//:::::::::::::: NonConformityType Routes:::::::::::::
	$routeProvider.when('/pesquisar/tipoNaoConformidade', {
		templateUrl: 'partials/pages/nonConformityType/searchNonConformityType.html',
		controller: 'NonConformityTypeController',
		resolve: {
			PageMode: function(SearchMode){return SearchMode;},
	}});
	
	
});


//::::::::: Directives ::::::::::::
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

gncweb.directive('editDelete', [function() {
    return {
      replace: true,
      templateUrl : 'partials/templates/editDeleteConfirmation.html',
      scope: {onConfirm: '&', onEdit: '&'},
    };
}]);


// ::::::::: Factorys :::::::::
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
	$rootScope.API_NON_CONFIRMITY_TYPE_URL = 'api/nonconformitytypes';
	
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
