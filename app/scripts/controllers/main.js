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

     this.getAllPosts = () => {
       PostService.getAllPost().then(result => {
           $scope.posts = result.data;
           $scope.dbPosts = result.data;
           console.log(result.data)
       });
     }
     this.getAllPosts();

     this.setDelete = (post) => {
       $scope.postToDelete = post;
     }

     this.unsetDelete = () => {
       $scope.postToDelete = null;
     }

     this.deletePost = () => {
       PostService.deletePost($scope.postToDelete._id).then(result => {
           console.log(result)
           angular.element('#deleteModal .close').trigger('click');
           this.getAllPosts();
       });
     }

   }
 ]);
