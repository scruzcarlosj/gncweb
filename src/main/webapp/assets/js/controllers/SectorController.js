'use strict';

gncweb.controller('SectorController', ['$scope', '$http', '$routeParams', '$location', 'SectorService', 
                   function($scope, $http,$routeParams, $location, sectorService){
	
	$scope.sectors = [];
	$scope.sector = {id: null, name: '' };
	
	$scope.find = function(){
		if($scope.sector.name){
			$http.get('api/sectors/' + $scope.sector.name).success(function(response){
				if(response.status.code === 200) $scope.sectors = response.data;
			});
		} else {
			$http.get('api/sectors').success(function(response){
				if(response.status.code === 200) $scope.sectors = response.data;
			});
		}	
	};
	
	$scope.clean = function(){
		$scope.sector = {id: null, name: '' };
		$scope.sectors = [];
	};
	
	$scope.save = function(){
		if(!$routeParams.id){
			$http.post('api/sectors', $scope.sector);
		} else {
			$http.put('api/sectors', $scope.sector);
		}
		$location.path('pesquisar/setor');
	};
	
	$scope.edit = function(){
		if($routeParams.id){
			$http.get('api/sectors/' + $routeParams.id).success(function(response){
				if(response.status.code === 200) $scope.sector = response.data;
			});
		}
	};
	
	$scope.remove = function(sector, index){
		$http.delete('api/sectors/' + sector.id).success(function(response){
			if(response.status.code === 200) $scope.sectors.splice(index, 1);
		});
	};
	
}]);