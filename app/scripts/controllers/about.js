'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
var mytodoAppAboutCtrl = angular.module('mytodoAppAboutCtrl',[]);

	mytodoAppAboutCtrl.controller('AboutCtrl',['$scope', 'todoService',function ($scope,todoService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.todos = todoService.getTodos();

    

  }]);
