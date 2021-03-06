'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'textAngular'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/add-new-post', {
        templateUrl: 'views/add-post.html',
        controller: 'AddPostCtrl',
        controllerAs: 'addPost'
      })
      .when('/single-post/:id', {
        templateUrl: 'views/single-post.html',
        controller: 'SinglePostCtrl',
        controllerAs: 'singlePost'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');
  });
