angular.module("abnormalloads").controller("customerController", ["$scope", "Customers", function($scope, Customers) {
  $scope.message = "hello javascript";
  $scope.customer = {};

  Customers.all().then(function(data) {
    $scope.customers = data;
  });

  $scope.addCustomer = function() {
      Customers.save($scope.customer).then(function() {
        $scope.customer = {};
      });

  };

  $scope.deleteCustomer = function(rec) {
    Customers.destroy(rec._id);
  };

  $scope.selectCustomer = function(rec) {
    $scope.customer = rec;
  };

}]) ;
