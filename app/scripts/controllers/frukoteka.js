'use strict';

/**
 * @ngdoc function
 * @name appYoApp.controller:FrukotekaCtrl
 * @description
 * # FrukotekaCtrl
 * Controller of the appYoApp
 */
angular.module('appYoApp')
  .controller('FrukotekaCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
  // .controller('FrukotekaCtrl', function($scope) {
  // 	$scope.imagePath = 'img/washedout.png';
  // });
