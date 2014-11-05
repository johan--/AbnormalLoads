angular.module("abnormalloads").controller("customerController", ["$location", "$scope", "Customers", "$routeParams", function($location, $scope, Customers, $routeParams) {

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Customers.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

//  Customers.all().then(function(data) {
//  $scope.customers = data;
//  });

  $scope.addPricingLevel = function(rec) {
      //var newPriceLevel = new pricingLevel();

      //$scope.data.pricingLevel.push(new PricingLevel(rec.min, rec.max, rec.value, rec.fixedPrice));
  }

  $scope.saveCustomer = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else if($scope.data.pricingLevel.length<1) {
      alert('You must add at least one pricing level before you can save.')
    } else {
      Customers.save($scope.data).then(function() {
        $location.path("/list/customers");
      });
    }
  };

  $scope.deleteCustomer = function() {
    Customers.destroy($scope.data._id);
    $location.path("/list/customers");
  };

}]) ;
