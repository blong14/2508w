'use strict';

angular.module('2508wApp')
  .controller('DetailPhotoCtrl', ['$scope','$routeParams','$location','instagramService',
    function($scope,$routeParams,$location,instagramService) {

      $scope.pageClass = 'detail-view';

      this.id = $routeParams.id;
      this.album = instagramService;

      this.more = function(tag,url) {
        instagramService.more(tag,url);
      };

      $scope.$emit('pageview',$location.url());
    }
  ]);
