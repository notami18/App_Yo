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
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
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
      .when('/frukoteka', {
        templateUrl: 'views/frukoteka.html',
        controller: 'FrukotekaCtrl',
        controllerAs: 'frukoteka'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
