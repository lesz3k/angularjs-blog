'use strict';
/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('MainCtrl', ['$scope','PostsStore', 'PostService',
   function ($scope, PostsStore, PostService) {

     $scope.posts = [];
     $scope.dbPosts = [];
     $scope.postToDelete = null;
     $scope.tags = tagsArray; //tagsArray from /common/tags.js
     $scope.checkedTags = [];

     this.getAllPostsFromDb = () => {
       PostsStore.getAllPostsFromDb().then(result => {
         console.log('get all posts from db:')
         console.log(result)
         $scope.posts = result;
         $scope.dbPosts = result;
       })
     }


     this.getAllPosts = () => {
       let getStoredPosts = PostsStore.getStoredPosts()
       if (getStoredPosts === undefined || getStoredPosts == 0){
          console.log('no posts stored yet')
          this.getAllPostsFromDb();
       }
       else{
         $scope.posts = getStoredPosts;
         $scope.dbPosts = getStoredPosts;
         console.log('stored posts:')
         console.log(getStoredPosts)
       }
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
           this.getAllPostsFromDb();
           //reset post tags
           $scope.checkedTags = [];
           $scope.tags = $scope.tags.map((tag)=>{
             return {tag: tag.tag, isClicked: 'no'}
           })
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
