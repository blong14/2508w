'use strict';

/**
 * @ngdoc overview
 * @name 2508wApp
 * @description
 * # 2508wApp
 *
 * Main module of the application.
 */
angular
  .module('2508wApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/blvd/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blvd/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blvd/album', {
        templateUrl: 'views/photo.html',
        controller: 'PhotoCtrl as photo'
      })
      .when('/blvd/album/:id', {
        templateUrl: 'views/detail_photo.html',
        controller: 'DetailPhotoCtrl as photo'
      })
      .when('/blvd/apps', {
        templateUrl: 'views/application.html',
        controller: 'AppsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/blvd/'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode(true);
  });
