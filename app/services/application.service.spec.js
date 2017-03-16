'use strict';

import {default as Services} from './services';


describe('Application Service Test ', () => {

  let ApplicationsService;

  beforeEach(window.module(Services.name));

  beforeEach(inject(($injector) => {
    ApplicationsService = $injector.get('ApplicationsService');
  }));

  describe('retrieving the applications', () => {
    it('returns a list of applications', () => {
      ApplicationsService.loadApplications().then((apps) => {
        expect(apps).not.toBeNull();
        expect(apps.length).toBeGreaterThan(1);
      });
    });
  });
});
