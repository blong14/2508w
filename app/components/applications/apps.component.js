'use strict';

import template from './apps.component.html';
import AppsController from './apps.controller';


let appsComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: AppsController,
  controllerAs: 'ctrl'
};

export default appsComponent
