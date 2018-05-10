'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the clientApp
 */

 angular.module('clientApp')
   .controller('RootCtrl', ['$scope', '$rootScope', '$location',
   function ($scope, $rootScope, $location) {

      $scope.location = $location.path();
      $rootScope.$on('$routeChangeSuccess', function() {
          $scope.location = $location.path();
      });

   }
 ]);
