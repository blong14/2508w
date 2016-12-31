'use strict';


angular.module('2508wApp')
  .controller('MainCtrl', ['$location', 'GoogleAnalyticsService',
    function ($location, GoogleAnalyticsService) {

      GoogleAnalyticsService.recordView($location.url());
    }
  ]);
