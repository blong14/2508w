'use strict';

angular.module('2508wApp')
  .directive('foundationReflow', ['$timeout',function($timeout) {
    return {
      restrict: 'A',
      link: function(scope,elem,attrs) {
        if(!scope.$index || scope.$last) {
          $timeout(function () {
            if (angular.element(document).foundation && attrs.foundationReflow.length) {
               angular.element(document).foundation(attrs.foundationReflow,'reflow');
            }
          },0);
        }
      }
    };
  }]
);
