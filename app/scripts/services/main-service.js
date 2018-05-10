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
    let currentPost;
    return {
        getAllPost: function() {
            return $http.post(base_url + '/api/post/getAllPost');
        },
        deletePost: function(id) {
            return $http.post(base_url + '/api/post/deletePost',{id : id});
        },
        addPost: function(post) {
            console.log(post)
            return $http.post(base_url + '/api/post/createPost',{
                title : post.title,
                description : post.description,
                tags: post.tags,
                date: post.date
            })
        },
        setCurrentPost: function(post) {
            currentPost = post;
            console.log(currentPost)
        },
        getCurrentPost: function() {
            console.log(currentPost)
            return currentPost
        }
    };
  });
