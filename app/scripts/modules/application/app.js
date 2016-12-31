'use strict';

angular
  .module('2508wApp', [
    'ngAnimate',
    'ngRoute',
    'Common'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/blvd/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blvd/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blvd/apps', {
        templateUrl: 'views/application.html',
        controller: 'AppsCtrl'
      })
      .otherwise({
        redirectTo: '/blvd/'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });
