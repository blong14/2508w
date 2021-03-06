'use strict';

import OpenTracing from 'opentracing';


const logo = require('../../images/logo.jpg');


export default class AppsController {

  /* @ngInject */
  constructor($location, GoogleAnalyticsService, ApplicationsService, TracerService) {
    this.$location = $location;
    this.google = GoogleAnalyticsService;
    this.appsService= ApplicationsService;
    this.TracerService = TracerService;
    this.tracer = TracerService.getGlobalTracer();
    this.logo = logo;
    this.apps = [];
  }

  $onInit() {
    const span = this.tracer.startSpan('AppsComponent', {
      tags: {
        'controller': 'AppsController',
        'action': '$onInit'
      }
    });

    const ctx = this.TracerService.createCarrier(span);

    this.google.recordView(this.$location.url());

    this.appsService.loadApplications(ctx).then((apps) => {
      this.apps = apps;
      span.finish();
    });
  };
}
