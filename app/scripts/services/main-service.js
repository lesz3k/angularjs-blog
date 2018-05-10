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
            return $http.post(base_url + '/api/post/getAllPost');
        },
        deletePost: function(id) {
            return $http.post(base_url + '/api/post/deletePost',{id : id});
        }
    };
  });
