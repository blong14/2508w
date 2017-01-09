'use strict';

import angular from 'angular';


export default class AppConfig {

  /* @ngInject */
  static config($document, $locationProvider) {
    angular.element($document).foundation();

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
  }
}
