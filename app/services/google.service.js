'use strict';

export default class GoogleAnalyticsService {

  /* @ngInject */
  constructor($window) {
    this.$window = $window;
    this.domain = 'https://www.2508w.club';
  }

  recordView(url) {
    if (this.$window.ga && this.$window.location.origin === this.domain) {
      this.$window.ga('send', 'pageview', { page: url});
    }
  }
}
