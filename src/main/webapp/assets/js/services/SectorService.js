gncweb.factory('SectorService', function($resource){

	return $resource('api/sectors/:id', {id: '@id'}, {update: {method: 'PUT'}});
	
});

