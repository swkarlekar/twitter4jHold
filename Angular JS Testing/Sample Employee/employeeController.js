angular.module('demoApp').controller('employeeController', function($scope, employeeService) {
	function init() {
		$scope.employees = employeeService.getData();
	};
	
	init();
});