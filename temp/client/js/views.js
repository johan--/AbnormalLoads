angular.module('abnormalloads').run(['$templateCache', function ($templateCache) {
	$templateCache.put('/views/customer.html', 'Hello Customer!<br/>{{message;}}<br/><div class="form"><label>Customer Name:</label><input type="text"id="customer_name"name="customer_name"placeholder="Customer Name"ng-model="customer.name"value=""/><br/><div><ul><li ng-click="selectCustomer(cust)"ng-repeat="cust in customers">{{cust.name;}}<button ng-click="deleteCustomer(cust)">X</button></li></ul></div><button id="customer_btnAdd"ng-click="addCustomer()">Add Customer</button></div>;');
	$templateCache.put('/views/home.html', '<h1>Home.html</h1> ');
	$templateCache.put('/views/test.html', 'Hello Customer!<br/>{{message;}}<br/><div class="form"><div><ul><li ng-repeat="test in tests">{{test.name;}}</li></ul></div></div>;');
}]);