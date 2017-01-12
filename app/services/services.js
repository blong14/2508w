'use strict';

import angular from 'angular';
import GoogleAnalyticsService from './google.service';
import ApplicationsService from './application.service';
import TracerService from './tracer.service';


let services =  angular.module('app.services', [])
  .service('GoogleAnalyticsService', GoogleAnalyticsService)
  .service('ApplicationsService', ApplicationsService)
  .service('TracerService', TracerService);

export default services
