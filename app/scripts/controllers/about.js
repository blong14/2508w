'use strict';

angular.module('2508wApp')
  .controller('AboutCtrl', ['$scope','$location', function($scope,$location) {

    $scope.$emit('pageview',$location.url());
  }]);
