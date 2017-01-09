'use strict';

import template from './about.component.html';
import AboutController from './about.controller';

let aboutComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: AboutController,
  controllerAs: 'ctrl'
};

export default aboutComponent
