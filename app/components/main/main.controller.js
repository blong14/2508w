'use strict';


export default class MainController {

  /* @ngInject */
  constructor($location, GoogleAnalyticsService, TracerService) {
    this.$location = $location;
    this.google = GoogleAnalyticsService;
    this.tracer = TracerService.getGlobalTracer();
  }

  $onInit() {
    let span = this.tracer.startSpan('MainComponent', {
      tags: {
        'controller': 'MainController',
        'action': '$onInit'
      }
    });
    this.google.recordView(this.$location.url());
    span.finish();
  };
}
