'use strict';

import {default as Services} from './services';


describe('Google Service Test', () => {

  let $location, GoogleService;

  beforeEach(() => {
    window.module(Services.name);
  });

  beforeEach(inject(($injector) => {
    $location = $injector.get('$location');
    GoogleService = $injector.get('GoogleAnalyticsService');

    spyOn($location, 'host').and.returnValue('www.2508w.club');

    // Mock google analytic
    window.ga = {};
  }));

  describe('the google service', () => {

    it('should record pageviews', () => {
      spyOn(window, 'ga');

      GoogleService.recordView('foo');

      expect(window.ga).toHaveBeenCalled();
    });
  });
});
