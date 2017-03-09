'use strict';

import {default as Services} from './services';
import OpenTracing from 'opentracing';


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
      spyOn(OpenTracing, "initGlobalTracer");

      TracerService.initGlobalTracer();

      expect(OpenTracing.initGlobalTracer).toHaveBeenCalled();
    });

    it('should return the global tracer', () => {
      spyOn(TracerService, "getGlobalTracer").and.returnValue(globalTracer);
      let tracer = TracerService.getGlobalTracer();
      expect(tracer).not.toBeNull();
      expect(tracer).toEqual(globalTracer);
    });
  });
});
