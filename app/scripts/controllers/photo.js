'use strict';

angular.module('2508wApp')
  .controller('PhotoCtrl', ['$scope','$location','instagramService','userService',
    function($scope,$location,instagramService,userService) {
      var self = this;

      $scope.pageClass = "master-view";

      this.album = instagramService;

      $scope.$emit('pageview',$location.url());
    }
  ]);
