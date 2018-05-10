'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SinglePostCtrl
 * @description
 * # SinglePostCtrl
 * Controller of the clientApp
 */

 angular.module('clientApp')
   .controller('SinglePostCtrl', ['$scope', '$rootScope', '$location', 'PostService',
   function ($scope, $rootScope, $location, PostService) {
    // $scope.postItem = {title: 'test', description: 'test descirption'}
     $scope.postItem = PostService.getCurrentPost();

     this.deletePost = () =>{
       PostService.deletePost($scope.postItem._id).then(result => {
           //angular.element('#deleteModal .close').trigger('click');
           $location.path( "/" )
       });
     }
   }
 ]);
