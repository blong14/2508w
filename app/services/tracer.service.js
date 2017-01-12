'use strict';

import angular from 'angular';
import OpenTracing from 'opentracing';
import HawkularApm from 'hawkular-apm-opentracing';


export default class TracerService {

  initGlobalTracer() {
    if (this.hasGlobalTracer()) return;

    let tracer = new HawkularApm.APMTracer({
      recorder: new HawkularApm.ConsoleRecorder(),
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
}
