'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:mytodoAppDirectives
 * @description
 * # mytodoAppDirectives
 */
var mytodoAppDirectives = angular.module('mytodoAppDirectives',[]);

  mytodoAppDirectives.directive('todoDirective', [function () {
  	return{
		replace :true,
		templateUrl : "views/directives/todoDirective.html",
		transclude : true,
		scope : {
			launchButtonLabel : '=',
			modalTitle : '='
		}
	};
	}]);
