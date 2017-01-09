'use strict';

const ben = require('../../images/ben.jpg');
const dora = require('../../images/dora.jpg');


export default class AboutController {

  /* @ngInject */
  constructor($location, GoogleAnalyticsService) {
    this.$location = $location;
    this.google = GoogleAnalyticsService;
    this.ben = ben;
    this.dora = dora;
  }

  $onInit() {
    this.google.recordView(this.$location.url());
  };
}
