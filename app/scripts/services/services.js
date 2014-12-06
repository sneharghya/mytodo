'use strict';

/**
 * @ngdoc service
 * @name mytodoApp.todoService
 * @description
 * # todoService
 * Service in the mytodoApp.
 */
var mytodoAppServices = angular.module('mytodoAppServices',[]);

  mytodoAppServices.factory('todoService', function (localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var todoServiceObj = {};
    var todosInLocalStorage = localStorageService.get('todos');
    var todosFromLocalStorage = todosInLocalStorage || [];
    
    todoServiceObj.getTodos = function(){
    	return todosFromLocalStorage;
    };

    todoServiceObj.updateTodos = function(todos){
    	localStorageService.set('todos',todos);
    };

    todoServiceObj.addTodo = function(todos,todo){
		todos.push(todo);
	};

	todoServiceObj.removeTodoAtIndex = function(todos,index){
		todos.splice(index,1);
	};

    return todoServiceObj;
  });
