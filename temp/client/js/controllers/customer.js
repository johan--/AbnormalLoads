angular.module("abnormalloads").controller("customerController", ["$scope", "Customers", "$routeParams", function($scope, Customers, $routeParams) {
  $scope.customer = {};

  Customers.get($routeParams.id).then(function(data) {
    alert('hello!')
    $scope.data = data;
  });

//  Customers.all().then(function(data) {
//  $scope.customers = data;
//  });

//  $scope.addCustomer = function() {
//      Customers.save($scope.customer).then(function() {
//        $scope.customer = {};
//      });

//  };

//  $scope.deleteCustomer = function(rec) {
//    Customers.destroy(rec._id);
//  };

//  $scope.selectCustomer = function(rec) {
//    $scope.customer = rec;
//  };

}]) ;
