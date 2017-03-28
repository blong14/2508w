'use strict';

import angular from 'angular';
import OpenTracing from 'opentracing';
import HawkularApm from 'hawkular-apm-opentracing';

let _tracer = null;


export default class TracerService {

  initGlobalTracer() {
    if (_tracer) return;

    _tracer = new HawkularApm.APMTracer({
      recorder: new HawkularApm.HttpRecorder('http://localhost:8080', 'jdoe', 'password'),
      //recorder: new HawkularApm.ConsoleRecorder(),
      sampler: new HawkularApm.AlwaysSample(),
      deploymentMetaData: new HawkularApm.DeploymentMetaData('TracerService')
    });

    OpenTracing.initGlobalTracer(_tracer);
  }

  getGlobalTracer() {
    return OpenTracing.globalTracer();
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
