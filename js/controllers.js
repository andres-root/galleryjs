var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('ImageListCtrl', function ($scope, $http) {
	$http.get('js/gallery.json').success(function(data) {
	    $scope.images = data;
	  });
});