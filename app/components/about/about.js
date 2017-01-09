'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutComponent from './about.component';
import template from './about.html';


let aboutModule = angular.module('about', [uiRouter]);

aboutModule.$inject = ['$stateProvider'];

aboutModule.config(($stateProvider) => {
    /* @ngInject */
    $stateProvider
      .state('about', {
        url: '/blvd/about',
        template: template
      });
  })
  .component('aboutComponent', aboutComponent);

export default aboutModule;
