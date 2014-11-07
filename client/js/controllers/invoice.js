angular.module("abnormalloads").controller("invoiceController", ["$location", "$scope", "Payments", "Invoices", "$routeParams", function($location, $scope, Payments, Invoices, $routeParams) {
  //If the user hasn't filled in any fields yet, this will be null
  $scope.data = [];

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Invoices.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

  $scope.saveInvoice = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else {
      Invoices.save($scope.data).then(function() {
        $location.path("/list/invoices");
      });
    }
  };

  $scope.deleteInvoices = function() {
    Invoices.destroy($scope.data._id);
    $location.path("/list/invoices");
  };

}]) ;
