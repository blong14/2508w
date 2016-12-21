'use strict';

angular.module('2508wApp')
  .factory('userService', ['$rootScope','$cookies','$http',
    function($rootScope,$cookies,$http) {

      var user = {};

      user.isLoggedIn = function() {
        $http.get('/admin/').success(function(e) {
          user.admin = e.admin;
          user.loggedIn = e.loggedIn;
          user.logOutUrl = e.logOutUrl;
          user.youtubeApiKey = e.youtubeApiKey;
          user.accessToken = e.accessToken;
          user.client_id = e.clientId;
        });
      };

      user.isLoggedIn();

      return user;
    }
  ]);
