'use strict';

import angular from 'angular';
import GoogleAnalyticsService from './google.service'
import ApplicationsService from './application.service';


export default angular.module('app.services', [])
  .service('GoogleAnalyticsService', GoogleAnalyticsService)
  .service('ApplicationsService', ApplicationsService);
