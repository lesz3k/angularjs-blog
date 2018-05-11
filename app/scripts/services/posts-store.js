'use strict';

/**
 * @ngdoc service
 * @name clientApp.PostsStore
 * @description
 * # PostsStore
 * Service in the clientApp.
 */

const base_url = 'http://localhost:3000'

angular.module('clientApp')
  .service('PostsStore', function ($http) {

    let storedPosts = [];

    return {
        getAllPostsFromDb: function() {
            return $http.post(base_url + '/api/post/getAllPost')
            .then(result => {
                console.log(result.data)
                localStorage.removeItem('angular-js-blog');
                localStorage.setItem('angular-js-blog', JSON.stringify(result.data));
                storedPosts = result.data;
                return storedPosts
            });
        },
        getStoredPosts: function() {
          if(localStorage.getItem('angular-js-blog') === null){
            console.log('no posts local storage...')
          } else {
            console.log('getting posts from loaclStorage...')
            storedPosts = JSON.parse(localStorage.getItem('angular-js-blog'));
          }
          return storedPosts;
        }
    };
  });
