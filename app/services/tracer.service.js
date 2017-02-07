'use strict';

import angular from 'angular';
import OpenTracing from 'opentracing';
import HawkularApm from 'hawkular-apm-opentracing';


export default class TracerService {

  initGlobalTracer() {
    if (this.hasGlobalTracer()) return;

    let tracer = new HawkularApm.APMTracer({
      recorder: new HawkularApm.HttpRecorder('http://localhost:8080', 'adminM3201Y0', '5kC2lZYrDzsA1PYev'),
      // recorder: new HawkularApm.ConsoleRecorder(),
      sampler: new HawkularApm.AlwaysSample(),
      deploymentMetaData: new HawkularApm.DeploymentMetaData('TracerService')
    });

    OpenTracing.initGlobalTracer(tracer);
  }

  getGlobalTracer() {
    return OpenTracing.globalTracer();
  }

  hasGlobalTracer() {
    return typeof this.getGlobalTracer() === 'undefined';
  }

  createCarrier(span) {
    let carrier = {};
    this.getGlobalTracer().inject(
      span.context(),
      OpenTracing.FORMAT_TEXT_MAP,
      carrier
    );

    return carrier;
  }

  extractSpanContext(carrier) {
    return this.getGlobalTracer().extract(
      OpenTracing.FORMAT_TEXT_MAP,
      carrier
    );
  }
}
