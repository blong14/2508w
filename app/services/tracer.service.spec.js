'use strict';

import {default as Services} from './services';


describe('Tracer Service Test', () => {

  let TracerService, globalTracer;

  beforeEach(() => {
    window.module(Services.name);
  });

  beforeEach(inject(($injector) => {
    TracerService = $injector.get('TracerService');
    globalTracer = {};
  }));

  describe('the global tracer', () => {

    it('initially should not have a tracer', () => {
      expect(TracerService.hasGlobalTracer()).toBe(false);

      TracerService.initGlobalTracer();

      expect(TracerService.hasGlobalTracer()).toBe(true);
    });

    it('should return the global tracer', () => {
      spyOn(TracerService, "getGlobalTracer").and.returnValue(globalTracer);
      let tracer = TracerService.getGlobalTracer();
      expect(tracer).not.toBeNull();
      expect(tracer).toEqual(globalTracer);
    });
  });
});
