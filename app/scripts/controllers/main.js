'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('MainCtrl', ['$scope', 'PostService',
   function ($scope, PostService) {
     
     $scope.posts = [];
     $scope.dbPosts = [];
     $scope.postToDelete = null;

     PostService.getAllPost().then(result => {
         $scope.posts = result.data;
         $scope.dbPosts = result.data;
         console.log(result.data)
     });

     this.setDelete = (post) => {
       $scope.postToDelete = post;
       console.log(post);
     }

   }
 ]);
