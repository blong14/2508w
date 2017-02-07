'use strict';

const ben = require('../../images/ben.jpg');
const dora = require('../../images/dora.jpg');


export default class AboutController {

  /* @ngInject */
  constructor($location, GoogleAnalyticsService, TracerService) {
    this.$location = $location;
    this.google = GoogleAnalyticsService;
    this.tracer = TracerService.getGlobalTracer();
    this.ben = ben;
    this.dora = dora;
  }

  $onInit() {
    let span = this.tracer.startSpan('AboutComponent', {
      tags: {
        'controller': 'AboutController',
        'action': '$onInit'
      }
    });
    this.google.recordView(this.$location.url());
    span.finish();
  };
}
