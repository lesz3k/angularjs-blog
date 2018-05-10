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
     $scope.tags = tagsArray; //tagsArray from /common/tags.js
     $scope.checkedTags = [];

     this.getAllPosts = () => {
       PostService.getAllPost().then(result => {
           $scope.posts = result.data;
           $scope.dbPosts = result.data;
           console.log(result.data)
       });
     }
     this.getAllPosts();
     angular.element(document.querySelector(".modal-backdrop")).remove();

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

     this.setPostItem = (post) => {
       PostService.setCurrentPost(post)
     }

     //change the tags array to include param if clicked
     let newTagsArr = $scope.tags.map((tag, i)=>{
       return {tag: tag, isClicked: 'no'}
     })
     $scope.tags = newTagsArr;

     this.sortByTags = (thisTag) => {
       console.log(thisTag.tag)

       //change tag style on click
       if (thisTag.isClicked == 'no'){
         $scope.tags = $scope.tags.map(elem=>{
           (elem.tag == thisTag.tag) ? elem.isClicked = 'yes' : null//elem.isClicked = 'no'
           //add tag to array if clicked
          if ($scope.checkedTags === undefined || $scope.checkedTags.length == 0) {
              $scope.checkedTags.push(thisTag.tag)
          }else {
            if(!$scope.checkedTags.includes(thisTag.tag)){
                $scope.checkedTags.push(thisTag.tag)
            }
          }
           return elem
         })
       }
       else {
         $scope.tags = $scope.tags.map(elem=>{
           (elem.tag == thisTag.tag) ? elem.isClicked = 'no' : null
           //remove tag from array if un-clicked
           $scope.checkedTags = $scope.checkedTags.filter(tag => tag !== thisTag.tag)
           return elem
         })
       }

       //check if all tags are unclicked and reload the full blog list
       let allPostsTags = $scope.tags.map((tag)=>{
         return tag.isClicked
       })
       console.log($scope.checkedTags)

       if(allPostsTags.indexOf('yes') != -1){
           $scope.posts = $scope.dbPosts.filter(item => {
             console.log(item.tags)
             let newItem = null
             item.tags.map(tag=>{
               $scope.checkedTags.includes(tag) ? newItem = item : null
             })
             return newItem
           })
       } else{
         $scope.checkedTags = [];
         $scope.posts = $scope.dbPosts
       }
     }

   }
 ]);
