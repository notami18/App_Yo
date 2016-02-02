'use strict';

angular
  .module('appYoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.sortable',
    'LocalStorageModule'
  ])

  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])

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
