angular.module('demoApp').controller('empDetailController', function($scope, $routeParams, employeeService) {
  function init() {
    console.log('In empDetailController');
  }
  
  $scope.currentEmpId = $routeParams.empid;

  init();
});
