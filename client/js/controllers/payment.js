angular.module("abnormalloads").controller("paymentController", ["$location", "$scope", "Payments", "Invoices", "$routeParams", function($location, $scope, Payments, Invoices, $routeParams) {
  //If the user hasn't filled in any fields yet, this will be null
  $scope.data = {};
  $scope.data.invoices = [];

  //And so will this
  $scope.data.availableInvoices = [];

  Invoices.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.availableInvoices = data;
  });

  $scope.removeInvoice = function(index) {
    $scope.data.invoices.splice(index,1);
  }

  $scope.addInvoice = function(model) {
      //Make sure it hasn't already been added
      for(var x = 0;x<$scope.data.invoices.length;x++) {
        if($scope.data.invoices[x]._id==model._id) {
          alert('This Invoice has already been added');
          return;
        }
      }

      $scope.data.invoices.push(model);
  }

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Payments.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

  $scope.savePayment = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else if($scope.data.invoices.length<1) {
      //Make sure we have at least 1 invoice
      alert('You must select at least 1 invoice before you can save.');
    } else {
      Payments.save($scope.data).then(function() {
        $location.path("/list/payments");
      });
    }
  };

  $scope.deletePayment = function() {
    Payments.destroy($scope.data._id);
    $location.path("/list/payments");
  };

}]) ;
