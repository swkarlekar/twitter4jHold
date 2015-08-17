angular.module('demoApp').factory('employeeService', function (){
	return {
		getData : function(){
			var employees = [{name: 'John Doe', id: '1'}, 
		                        {name: 'Mary Homes', id: '2'},
		                        {name: 'Chris Karl', id: '3'}
		    					];
		    
			return employees;
		}
	};
	
});