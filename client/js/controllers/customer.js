angular.module("abnormalloads").controller("customerController", ["$location", "$scope", "Customers", "$routeParams", function($location, $scope, Customers, $routeParams) {
  $scope.data = {};
  $scope.data.pricingLevel = [];

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Customers.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

  $scope.removePricingLevel = function(index) {
    //Remove the pricing level from the list
    $scope.data.pricingLevel.splice(index,1);
  }

  $scope.addPricingLevel = function(newPricingLevel) {
      //Make sure it hasn't been previously added
      for(var x = 0;x<$scope.data.pricingLevel.length;x++) {
        if($scope.data.pricingLevel[x].min==newPricingLevel.min && $scope.data.pricingLevel[x].max==newPricingLevel.max && $scope.data.pricingLevel[x].value==newPricingLevel.value && $scope.data.pricingLevel[x].fixedPrice==newPricingLevel.fixedPrice) {
          alert('This pricing level has already been added.');
          return;
        }
      }

      //Double check our pricing rule
      if(!$.isNumeric(newPricingLevel.min) || !$.isNumeric(newPricingLevel.max) || !$.isNumeric(newPricingLevel.value) || !$.isNumeric(newPricingLevel.fixedPrice)) {
        alert('The Pricing Level fields must all be numeric.');
        return;
      }

      if(newPricingLevel.min>=newPricingLevel.max || newPricingLevel.min == "" || newPricingLevel.max == "" || newPricingLevel.value == "" || newPricingLevel.fixedprice == "") {
        alert('Pricing Level validation failed.');
        return;
      }

      //Add it
      //Adding it as a new object because it was keeping the binding of our input boxes to our last added list item
      $scope.data.pricingLevel.push({ min: newPricingLevel.min, max: newPricingLevel.max, value: newPricingLevel.value, fixedPrice: newPricingLevel.fixedPrice });

      //$scope.data.pricingLevel.push(new);

      $("#pricinglevel_min").val("");
      $("#pricinglevel_max").val("");
      $("#pricinglevel_value").val("");
      $("#pricinglevel_fixedprice").val("");

  }

  $scope.saveCustomer = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else if(!$scope.data.pricingLevel || $scope.data.pricingLevel.length<1) {
      alert('You must add at least one pricing level before you can save.');
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
