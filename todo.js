angular.module('TodoApp', [])
	.controller('TodoCtrl', function($scope) {
		$scope.totalTodos = 4;
		$scope.todos = [
			{text:'Learn angularJS', done:false},
			{text:'Build an App', done:false},
		];
	});