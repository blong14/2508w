'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appsComponent from './apps.component';
import template from './apps.html';


let appsModule = angular.module('apps', [uiRouter]);

appsModule.$inject = ['$stateProvider'];

appsModule.config(($stateProvider) => {
    /* @ngInject */
    $stateProvider
      .state('apps', {
        url: '/blvd/apps',
        template: template
      });
  })
  .component('appsComponent', appsComponent);

export default appsModule;
