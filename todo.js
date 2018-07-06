angular.module('TodoApp', [])
	.controller('TodoCtrl', function($scope) {
		$scope.totalTodos = 4;
		$scope.todos = [
			{text:'Learn angularJS', done:false},
			{text:'Build an App', done:false},
		];

		$scope.addTodo = function(){
			$scope.todos.push({text:$scope.formTodoText, done:false});
			$scope.formTodoText = "";
		};
	});