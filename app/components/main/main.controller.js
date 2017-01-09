'use strict';


export default class MainController {

  /* @ngInject */
  constructor($location, GoogleAnalyticsService) {
    this.$location = $location;
    this.google = GoogleAnalyticsService;
  }

  $onInit() {
    this.google.recordView(this.$location.url());
  };
}
