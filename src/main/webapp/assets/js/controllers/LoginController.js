'use strict';

loginModule.controller('LoginController', ['$scope', '$http', '$routeParams', '$location', 'LoginService', 
                                           function($scope, $http,$routeParams, $location, LoginService){
	
	$scope.user = {email: null, password: null};
	
	$scope.login = function(){
		LoginService.login($scope.user, function(response){
			$scope.user = response.data;
		});
	};
	
}]);