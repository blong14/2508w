'use strict';

import TracerService from './tracer.service';

const apps = [
  {
    image: require('../images/crowd_review.png'),
    url: 'https://www.reverbnation.com/crowd_review/sample_report/standard_insight',
    title: 'ReverbNation Crowd Review',
    header: 'Improve Your Music With Unbiased Feedback',
    description: 'Get your song heard by a targeted sample of real music fans and measure their thoughts and feelings in a customizable research report. Built with Rails, Highcharts, and Angular 1.x.',
    linkText: 'See Sample Report...'
  },
  {
    image: require('../images/BigData.png'),
    url: 'http://www.fastcompany.com/3057406/behind-the-brand/can-big-data-discover-the-next-pop-star',
    title: 'ReverbNation Curation',
    header: 'The Big Data Challenge',
    description: 'My first major project at ReverbNation. What a pleasure it was develop a piece of technology that is integral in many of the things that makes ReverbNation great. Built with Rails, Sass, ElasticSearch, Resque, and Angular 1.x',
    linkText: 'Go to article...'
  },
  {
    image: require('../images/fan_voting.png'),
    url: 'http://demo.soniclemur.com/',
    title: 'Fan Voting',
    header: 'Battle of the Bands',
    description: 'Help select the opening act for an exclusive concert featuring country music star, Tyler Farr! Built with Docker, Rails, and Angular2.',
    linkText: 'Check it out...'
  },
  {
    image: require('../images/opp_marketing.png'),
    url: 'https://www.reverbnation.com/band-promotion/opportunities',
    title: 'Product Marketing',
    header: 'ReverbNation Marketing Pages',
    description: 'Product marketing refresh. Provides a landing place for blog content, social media sharing, and general awesomeness. Built with Rails and Foundation.',
    linkText: 'Check it out...'
  },
  {
    image: require('../images/reverbnation.png'),
    url: 'https://www.reverbnation.com/goodgraeff',
    title: 'Artist Profile',
    header: 'New Artist Profile',
    description: 'Front-end update for one of ReverbNation\'s most viewed pages. Built Angular 1.x, Rails, and Foundation.',
    linkText: 'Try it...'
  },
  {
    image: require('../images/hbco.png'),
    url: 'http://www.heritagebuildingco.com/',
    title: 'HBCO',
    header: 'Heritage Building Co., LLC - Veteran Owned',
    description: 'Starter website for Heritage Building Co. Tried for a clean and simple way to present HBCO\'s content. This by no means is the final product but simply a place to start telling HBCO\'s story. Built with Java, Foundation, and Angular 1.x.',
    linkText: 'Try it...'
  },
  {
    image: require('../images/blender.png'),
    url: 'http://ruby-brewcalc.rhcloud.com/',
    title: 'Blender',
    header: 'Beer Blender',
    description: 'Pro Brewer Tim Copple needed a quick and easy web app to achieve those perfect blends. Built with Rails, Foundation, and Angular 1.x.',
    linkText: 'Try it...'
  },
  {
    image: require('../images/shopkeen.png'),
    url: 'http://shopkeen.herokuapp.com',
    title: 'Shopkeen',
    header: 'The ultimate Shopkin database',
    description: 'Shopkeen is an attempt at creating a Shopkin database for Sadie and her friend Carson. Built with Rails, PostgreSQL, and Foundation.',
    linkText: 'Try it...'
  },
  {
    image: require('../images/kayewalker.png'),
    url: 'http://kayeproducts.com/web-app/',
    title: 'KayeWalker',
    header: 'An easy way to find the proper walker for your needs.',
    description: 'Web and mobile applications to help determine the best walker offered by Kaye Products. Built with Cordova, Java, jQuery, and Bootstrap',
    linkText: 'Try it...'
  }
];

export default class ApplicationsService {

  /* @ngInject */
  constructor($q, TracerService) {
    this.$q = $q;
    this.TracerService = TracerService;
    this.tracer = TracerService.getGlobalTracer();
  }

  loadApplications(ctx = {}) {
    const spanCtx = this.TracerService.extractSpanContext(ctx),
          span = this.tracer.startSpan('ApplicationService.loadApplications', { childOf: spanCtx });
    return this.$q.when(apps).then((apps) => {
      span.finish();
      return apps;
    });
  }
}
