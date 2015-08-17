var mainApp = angular.module("mainApp", ['ngRoute']);
 
mainApp.config(function($routeProvider) {
    $routeProvider
        .when('/view1', {
            templateUrl: 'View1.html',
            controller: 'SimpleController'
        })
        .when('/view2', {
            templateUrl: 'View2.html',
            controller: 'SimpleController'
        })
        .otherwise({
            redirectTo: '/view1'
        });
});
 
mainApp.controller('SimpleController', function($scope) {
    $scope.customers = [
        {name: 'Sweta Karlekar', city:'St. Petersburg'},
        {name: 'Esha Karlekar', city:'Fairfax'},
        {name: 'Sujata Naik', city:'Mumbai'}
    ];
	$scope.addCustomer = function() {
					$scope.customers.push(
						{ 
							name: $scope.newCustomer.name,  
							city: $scope.newCustomer.city
						});
				};
 
});