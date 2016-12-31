'use strict';

angular.module('2508wApp')
  .factory('instagramService', ['$rootScope','$http',
    function($rootScope,$http) {

      var clientId = 'e4727226b47b493698d89d6ad6fdc34e',
          accessToken = '605582919.1fb234f.337da01df2f84650988597633f31051e',
          tags = [
            'gonghead',
            'gongtourneytime',
            'fifteen19',
            'HulaGong2015',
            'bullochili2014',
            'bullochili2013',
            'sadiegenisseven',
            'gongholidays2015'
          ];

      var instagram = {};
      instagram.getImages = function(tag) {
        var url = 'https://api.instagram.com/v1/tags/' +
                  tag + '/media/recent?access_token=' +
                  accessToken + '&client_id=' +
                  clientId + '&callback=JSON_CALLBACK';

        $http.jsonp(url).success(
          function(response) {
            if(!instagram[tag]) {
              instagram[tag] = {};
            }
            instagram[tag].images = response.data;
            instagram[tag].pagination = response.pagination;
          }
        );
      };

      instagram.more = function(tag,url) {
        url = url + '&callback=JSON_CALLBACK';
        $http.jsonp(url).success(
          function(response) {
            if(!instagram[tag]) {
              instagram[tag] = {};
            }
            instagram[tag].images.push.apply(instagram[tag].images,response.data);
            instagram[tag].pagination = response.pagination;
          }
        );
      };

      // Load images from instagram
      for(var tag in tags) {
        instagram.getImages(tags[tag]);
      }

      return instagram;
    }
  ]);
