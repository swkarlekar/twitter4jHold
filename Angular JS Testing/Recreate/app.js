var app = angular.module('demoApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'employeeController',
      templateUrl: 'Partials/View1.html'
    })
    .when('/employeedetail/:empid', {
      controller: 'empDetailController',
      templateUrl: 'Partials/View2.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

