'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
var mytodoAppCtrls = angular.module('mytodoAppCtrls',[]);

mytodoAppCtrls.controller('MainCtrl',function($scope,localStorageService,todoService){
	//var todosInLocalStorage = localStorageService.get('todos');
	//$scope.todos = todosInLocalStorage || [];
	$scope.todos = todoService.getTodos();

	$scope.$watch('todos',function(){
		todoService.updateTodos($scope.todos);
	},true);

	$scope.addTodo = function(){
		todoService.addTodo($scope.todos,$scope.todo);
		$scope.todo = '';
	};

	$scope.removeTodo = function(index){
		todoService.removeTodoAtIndex($scope.todos,index);
	};
});
