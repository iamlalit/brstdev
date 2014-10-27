/**
 * Created by gaurav.mehra on 10/14/2014.
 */
'use strict';
var EpageoApp = angular.module('EpageoApp', [])

    .controller('Controller', ['$scope', function($scope) {
        $scope.goToTop = function(){
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        }
    }]
);;/**
 * Created by gaurav.mehra on 10/14/2014.
 */
