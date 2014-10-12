'use strict';
var EpageoApp = angular.module('EpageoApp', [])

.controller('Controller', ['$scope', function($scope) {
	$scope.goToTop = function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	  		return false;
	}
}]);