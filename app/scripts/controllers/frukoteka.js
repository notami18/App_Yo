'use strict';

/**
 * @ngdoc function
 * @name appYoApp.controller:FrukotekaCtrl
 * @description
 * # FrukotekaCtrl
 * Controller of the appYoApp
 */
angular.module('appYoApp')
  .controller('FrukotekaCtrl', function ($scope, localStorageService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
    // $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    // $scope.addTodo = function () {
    //   $scope.todos.push($scope.todo);
    //   $scope.todo = '';
    // };
    // $scope.removeTodo = function (index) {
    //   $scope.todos.splice(index, 1);
    // };
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

    $scope.myDate = new Date();
    $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() - 2,
    $scope.myDate.getDate());
    $scope.maxDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() + 2,
    $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
      var day = date.getDay();
      var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
      var f=new Date();
      return f.day === 0 || f.day === 6;
    }

  });