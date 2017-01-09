'use strict';

const logo = require('../../images/logo.jpg');


export default class AppsController {

  /* @ngInject */
  constructor($location, GoogleAnalyticsService, ApplicationsService) {
    this.$location = $location;
    this.google = GoogleAnalyticsService;
    this.appsService= ApplicationsService;
    this.logo = logo;
    this.apps = [];
  }

  $onInit() {
    this.google.recordView(this.$location.url());
    this.appsService.loadApplications().then((apps) => this.apps = apps);
  };
}
