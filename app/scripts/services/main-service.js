'use strict';

/**
 * @ngdoc service
 * @name clientApp.PostService
 * @description
 * # PostService
 * Service in the clientApp.
 */

const base_url = 'http://localhost:3000'

angular.module('clientApp')
  .service('PostService', function ($http) {
    return {
        getAllPost: function() {
            console.log('test')
        },
        delete: function(id) {

        },

    };
  });
