'use strict';

angular.module('2508wApp')
  .controller('AuthCtrl', ['$scope','$window','$location','$cookies','userService', function($scope,$window,$location,$cookies,userService) {

    var self = this;

    this.user = userService;

    this.isLoggedIn = function() {
      return self.user.admin;
    };

    this.logOut = function() {
      var url = self.user.logOutUrl;
      window.location.href = url;
    };

    $scope.sendPageView = function() {
      $scope.$emit('pageview',$location.url());
    };

  }]);
