'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SinglePostCtrl
 * @description
 * # SinglePostCtrl
 * Controller of the clientApp
 */

 angular.module('clientApp')
   .controller('SinglePostCtrl', ['$scope', '$rootScope', '$location', 'PostService', 'PostsStore',
   function ($scope, $rootScope, $location, PostService, PostsStore) {

     $scope.postItem = PostService.getCurrentPost();

     this.deletePost = () =>{
       PostService.deletePost($scope.postItem._id).then(result => {
           PostsStore.getAllPostsFromDb();
           setTimeout((()=>{$location.path( "/" )}), 100)
       });
     }
   }
 ]);
