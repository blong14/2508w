'use strict';

angular.module('2508wApp')
  .controller('AboutCtrl', ['$location', 'GoogleAnalyticsService',
    function ($location, GoogleAnalyticsService) {

      GoogleAnalyticsService.recordView($location.url());
    }
  ]);
