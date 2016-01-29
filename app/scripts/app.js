'use strict';

/**
 * @ngdoc overview
 * @name appYoApp
 * @description
 * # appYoApp
 *
 * Main module of the application.
 */
angular
  .module('appYoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/hola_mundo', {
        templateUrl: 'views/hola_mundo.html',
        controller: 'HolaMundoCtrl',
        controllerAs: 'hola_mundo'
      })
      .when('/fruteka', {
        templateUrl: 'views/fruteka.html',
        controller: 'FrutekaCtrl',
        controllerAs: 'fruteka'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
