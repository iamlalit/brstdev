
'use strict';
var EpageoApp = angular.module('EpageoApp', [])

    .controller('Controller', ['$scope', function($scope) {
        $scope.goToTop = function(){
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }
        $scope.callMe = function(){
        	alert('here');
        }
    }]
);


EpageoApp.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm) {
      $elm.on('click', function() {
        $("body").animate({scrollTop: $elm.offset().top}, "slow");
      });
    }
  }
});