'use strict';

gncweb.controller('SectorController', ['$scope', '$http', '$routeParams', '$location', 'PageMode', 'SectorService', 
                   function($scope, $http,$routeParams, $location, PageMode, sectorService){
	
	$scope.sectors = [];
	$scope.sector = {id: null, name: '' };
	
	var url = $scope.API_SECTOR_URL;
	
	$scope.findAll = function(){
		$http.get(url).success(function(response){
			if(response.status.code === 200) $scope.sectors = response.data;
		});
	};
	
	$scope.findByName = function(){
		$http.get(url + '/' + $scope.sector.name).success(function(response){
			if(response.status.code === 200) $scope.sectors = response.data;
		});
	};
	
	$scope.clean = function(){
		$scope.sector = {id: null, name: '' };
		$scope.sectors = [];
	};
	
	$scope.save = function(){
		if(!$routeParams.id){
			$http.post(url, $scope.sector);
			$scope.$emit('addSuccessMessage', $scope.CREATE_SUCCESS_MESSAGE);
		} else {
			$http.put(url, $scope.sector);
			$scope.$emit('addSuccessMessage', $scope.UPDATE_SUCCESS_MESSAGE);
		}
		$location.path('pesquisar/setor');
		
	};
	
	$scope.loadPage = function(){
		if($routeParams.id){
			$http.get(url + '/' + $routeParams.id).success(function(response){
				if(response.status.code === 200) $scope.sector = response.data;
			}); 
		}
		$scope.pageMode = PageMode;
	};
	
	$scope.remove = function(sector, index){
		$http.delete(url + '/' + sector.id).success(function(response){
			if(response.status.code === 200) {
				$scope.sectors.splice(index, 1);
				$scope.$emit('addSuccessMessage', $scope.REMOVE_SUCCESS_MESSAGE);
			}
		});
	};
	
}]);