'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AddPostCtrl
 * @description
 * # AddPostCtrl
 * Controller of the clientApp
 */

//import Post from '../models/post.model';

 angular.module('clientApp')
   .controller('AddPostCtrl', ['$scope', 'PostService', 'PostsStore',
   function ($scope, PostService, PostsStore) {

     $scope.post = new Post();
     $scope.tags = tagsArray;
     $scope.checkedList = [];

     this.addPost = () => {
       if($scope.post.title && $scope.post.description && !($scope.checkedList.length == 0)){
           $scope.post.tags = $scope.checkedList;
           $scope.post.date = new Date().toLocaleString();
           PostService.addPost($scope.post).then(res => {
             console.log('new post added');
             PostsStore.getAllPostsFromDb();
           })
           angular.element('#openModalButton').trigger('click');
       } else {
           alert('Title, Description and Tags required');
       }
     }

     this.onCheckboxChange = (event) => {
         if(event.target.checked) {
           $scope.checkedList.push(event.target.value)
         }
         else {
           $scope.checkedList = $scope.checkedList.filter(e => e !== event.target.value);
         }
       }

   }
 ]);
