'use strict';

import angular from 'angular';

import Apps from './applications/apps';
import About from './about/about';
import Main from './main/main';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';


export default angular.module('app.components', [
  Apps.name,
  About.name,
  Main.name,
  NavBar.name,
  Footer.name
]);
