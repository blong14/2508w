'use strict';

angular.module('2508wApp')
  .controller('AppsCtrl', ['$location','ApplicationService','GoogleAnalyticsService',
    function ($location, ApplicationService, GoogleAnalyticsService) {

      var self = this;

      GoogleAnalyticsService.recordView($location.url());

      ApplicationService.loadApplications().then(function(apps) {
        self.apps = apps;
      });
    }
  ]);
