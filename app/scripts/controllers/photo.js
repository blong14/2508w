'use strict';

angular.module('2508wApp')
  .controller('PhotoCtrl', ['$scope','$location','instagramService',
    function($scope,$location,instagramService) {

      $scope.pageClass = 'master-view';

      this.album = instagramService;

      $scope.$emit('pageview',$location.url());
    }
  ]);
