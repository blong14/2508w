'use strict';

angular.module('Common')
  .factory('GoogleAnalyticsService', ['$window',
    function ($window) {
      var api = {}, DOMAIN = 'https://www.2508w.club';

      api.recordView = function (url) {
        if ($window.ga && $window.location.origin === DOMAIN) {
          $window.ga('send', 'pageview', { page: url});
        }
      };

      return api;
    }
  ]);
