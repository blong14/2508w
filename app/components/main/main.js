'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';
import template from './main.html';


let mainModule = angular.module('main', [uiRouter]);

mainModule.$inject = ['$stateProvider'];

mainModule.config(($stateProvider) => {
    /* @ngInject */
    $stateProvider
      .state('main', {
        url: '/blvd',
        template: template
      });
  })
  .component('mainComponent', mainComponent);

export default mainModule;
