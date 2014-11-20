angular.module("abnormalloads").controller("paymentSummaryController", ["$location", "$scope", "Invoices", "Jobs", "$routeParams", function($location, $scope, Invoices, Jobs, $routeParams) {
  //If the user hasn't filled in any fields yet, this will be null
  $scope.data = {};
  $scope.data.invoices = [];

  //Work out the invoice period
  var day = $routeParams.day;
  var month = $routeParams.month;
  var year = $routeParams.year;
  var queryFromDate = year + "-" + month + day;
  var queryToDate = year + "-" + month+1 + day;
  var customerId = $routeParams.customerId;

  Customers.get($routeParams.id).then(function(data) {
    $scope.data = data;
  });

  Invoices.query({ date > queryFromDate, date < queryToDate }).then(function(data) {
    if(data.length>0 && data[0].customerCode.toLowerCase()==$scope.data.customerCode.toLowerCase()) {
      alert('This Customer Code has already been used. Please use a different Customer Code.')
    } else {
      Customers.save($scope.data).then(function() {
        $location.path("/list/customers");
      });
    }
  });

}]) ;
