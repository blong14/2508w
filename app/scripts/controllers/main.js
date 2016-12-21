'use strict';

/**
 * @ngdoc function
 * @name 2508wApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 2508wApp
 */
angular.module('2508wApp')
  .controller('MainCtrl', ['$scope','$location',function ($scope,$location) {

    if(false) {
      $location.path('blvd/album?');
    }

    $scope.$emit('pageview',$location.url());
  }]);
