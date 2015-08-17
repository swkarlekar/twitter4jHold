var app = angular.module('demoApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'employeeController',
      templateUrl: 'employeelist.html'
    })
    .when('/employeedetail/:empid', {
      controller: 'empDetailController',
      templateUrl: 'employeedetail.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});