angular.module('demoApp').controller('employeeController', function($scope, employeeService) {
		$scope.customers = [
					{name:'Sweta Karlekar', city:'St. Petersburg'}, 
					{name:'Esha Karlekar', city:'Fairfax'}, 
					{name:'Sujata Naik', city:'Mumbai'}
				];
				$scope.addCustomer = function($scope) {
					$scope.customer.push({ name: $scope.newCustomer.name , city: $scope.newCustomer.city});
				};
				
			});