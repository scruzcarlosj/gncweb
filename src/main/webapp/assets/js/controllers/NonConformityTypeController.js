'use strict';

gncweb.controller('NonConformityTypeController', ['$scope', '$http', '$routeParams', '$location', 'PageMode', 'NonConformityTypeService', 
                   function($scope, $http,$routeParams, $location, PageMode, NonConformityTypeService){

	$scope.clean = function(){
		$scope.sector = {id: null, name: '' };
		$scope.sectors = [];
	};
	
	$scope.findAll = function(){
		NonConformityTypeService.findAll(function(response){
			$scope.nonConformityTypes = response.data;
		});
	};
	
	$scope.save = function(){
		if(!$routeParams.id){
			NonConformityTypeService.save($scope.nonConformityType, function(response){
				$scope.$emit('addSuccessMessage', $scope.CREATE_SUCCESS_MESSAGE);
			});
		}else{
			NonConformityTypeService.update($scope.nonConformityType, function(response){
				$scope.$emit('addSuccessMessage', $scope.UPDATE_SUCCESS_MESSAGE);
			});
		}
	}
	
	$scope.edit = function(id){
		$location.path('editar/tipoNaoConformidade/'+ id);
	};
	
	$scope.loadPage = function(){
		if(!PageMode.createMode){
		}
		$scope.pageMode = PageMode;
	};
	
	$scope.remove = function(nonConformityType, index){
		NonConformityType.remove(nonConformityType, function(response){
			$scope.$emit('addSuccessMessage', $scope.REMOVE_SUCCESS_MESSAGE);
			$scope.nonConformityTypes.splice(index, 1);
		});
	};
	
}]);