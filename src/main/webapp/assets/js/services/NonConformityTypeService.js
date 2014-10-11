gncweb.factory('NonConformityTypeService', function($http, $rootScope){
	
	var noConformityTypeService = {};
	
	noConformityTypeService.findAll = function(callback){
		$http.get($rootScope.API_NON_CONFIRMITY_TYPE_URL).success(function(response){
			if(response.status.code === 200){
				callback(response);
			}
		});
	}
	
	noConformityTypeService.save = function(nonConformityType, callback){
		$http.post($rootScope.API_NON_CONFIRMITY_TYPE_URL, nonConformityType).sucess(function(response){
			if(response.status.code === 200){
				callback(response);
			}
		});
	}
	
	noConformityTypeService.update = function (nonConformityType, callback){
		$http.put($rootScope.API_NON_CONFIRMITY_TYPE_URL, nonConformityType).sucess(function(response){
			if(response.status.code === 200){
				callback(response);
			}
		});
	}
	
	noConformityTypeService.remove = function(nonConformityType, callback){
		$http.delete($rootScope.API_NON_CONFIRMITY_TYPE_URL + '/' + nonConformityType.id).success(function(response){
			if(response.status.code === 200) {
				callback(response);
			}
		});
	}
	
	noConformityTypeService.findByName = function(nonConformityType, callback){
		$http.get($rootScope.API_NON_CONFIRMITY_TYPE_URL + '/' + nonConformityType.name).success(function(response){
			if(response.status.code === 200){
				callback(response);
			}
		});
	};
	
	
	return noConformityTypeService;
	
});

