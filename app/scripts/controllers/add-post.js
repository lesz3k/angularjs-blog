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
   .controller('AddPostCtrl', ['$scope', 'PostService', '$rootScope', '$location',
   function ($scope, PostService, $rootScope, $location) {

     $scope.post = new Post();
     $scope.tags = tagsArray;

     $scope.location = $location.path();
      $rootScope.$on('$routeChangeSuccess', function() {
          $scope.location = $location.path();
      });

      //console.log($scope.location)



   }
 ]);
