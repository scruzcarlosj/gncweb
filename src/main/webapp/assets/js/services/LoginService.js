'use strict';

loginModule.factory('LoginService', function($http, $rootScope){
	
	var loginService = {};
	
	loginService.login = function(user, callback){
		$http.post($rootScope.API_SECURITY_URL, user).success(function(response){
			if(response.status.code === 200) {
				callback(response);
			}
		});
	};
	
	return loginService;
});