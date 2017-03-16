'use strict';

export default class GoogleAnalyticsService {

  /* @ngInject */
  constructor($window, $location) {
    this.$window = $window;
    this.$location = $location;
    this.host = 'www.2508w.club';
  }

  recordView(url) {
    if (this.$window.ga && this.$location.host() === this.host) {
      this.$window.ga('send', 'pageview', { page: url});
    }
  }
}
