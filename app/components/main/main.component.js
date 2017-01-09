'use strict';

import template from './main.component.html';
import MainController from './main.controller';


let mainComponent = {
  restrict: 'E',
  scope: {},
  template: template,
  controller: MainController,
  controllerAs: 'ctrl'
};

export default mainComponent
