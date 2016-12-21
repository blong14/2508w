'use strict';

angular.module('2508wApp')
  .controller('PageViewCtrl', ['$window','$log','$scope','$location',
    function($window,$log,$scope,$location) {
      var self = this;

      $scope.$on('pageview',function(event,url) {
        self.sendPageView(url);
      });

      this.sendPageView = function(url) {
        if($window.location.origin === 'http://www.2508w.club') {
          console.log($window.location.origin);
          $window.ga('send', 'pageview', { page: $location.url() });
        }
      };
    }
  ]);
