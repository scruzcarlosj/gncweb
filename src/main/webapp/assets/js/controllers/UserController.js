'use strict';

gncweb.controller('UserController', ['$scope', '$http', '$routeParams', '$location', 'PageMode', 'Sectors', 
                   function($scope, $http,$routeParams, $location, PageMode, Sectors){
	
	var url = $scope.API_USER_URL;
	
	$scope.sectors = Sectors.data;
	
	$scope.findAll = function(){
		$http.get(url).success(function(response){
			if(response.status.code === 200) $scope.users = response.data;
		});
	};
	
	$scope.findByName = function(){
		$http.get(url + '/' + $scope.sector.name).success(function(response){
			if(response.status.code === 200) $scope.users = response.data;
		});
	};
	
	$scope.clean = function(){
		$scope.users = [];
		$scope.user = {	id: null, 
						name: null, 
						email: null,    
						password: null,
						sector: {id: null, name: null}
					  };
	};
	
	$scope.save = function(){
		if(!$routeParams.id){
			$http.post(url, $scope.user);
			$scope.$emit('addSuccessMessage', $scope.CREATE_SUCCESS_MESSAGE);
		} else {
			$http.put(url, $scope.user);
			$scope.$emit('addSuccessMessage', $scope.UPDATE_SUCCESS_MESSAGE);
		}
		$location.path('pesquisar/usuarios');
		
	};
	
	$scope.loadPage = function(){
		
		if($routeParams.id){
			$http.get(url + '/' + $routeParams.id).success(function(response){
				if(response.status.code === 200) $scope.user = response.data;
			}); 
		}
		$scope.pageMode = PageMode;
	};
	
	$scope.remove = function(sector, index){
		$http.delete(url + '/' + user.id).success(function(response){
			if(response.status.code === 200) {
				$scope.users.splice(index, 1);
				$scope.$emit('addSuccessMessage', $scope.REMOVE_SUCCESS_MESSAGE);
			}
		});
	};
	
}]);