'use strict';

var app = angular.module('app',[]);
app.controller('AppCtrl', function($http){
var vm= this;



vm.submit = function () {
	
	vm.startSearching = true;
    var params = {
    method: 'flickr.photos.search',
    api_key: '932e0cc959dd923ba91dafb4a7a720ef',
    tags: vm.search_tag,
    format: 'json',
    nojsoncallback: 1
}
    
           $http.get('https://api.flickr.com/services/rest',{params : params})
            .then(function(res){
                vm.data = res.data.photos.photo;				
                })
				.finally (function () {
					vm.startSearching = false;
				});

}
});