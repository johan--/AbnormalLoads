angular.module("abnormalloads").controller("customerController", ["$location", "$scope", "Customers", "$routeParams", function($location, $scope, Customers, $routeParams) {

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Customers.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

  $scope.addPricingLevel = function() {
      var min = $("#pricinglevel_min").val();
      var max = $("#pricinglevel_max").val();
      var value = $("#pricinglevel_value").val();
      var fixedprice = $("#pricinglevel_fixedprice").val();

      var pricinglevel = { min: min, max: max, value: value, fixedPrice: fixedprice };

      //Double check our pricing rule
      if(!$.isNumeric(min) || !$.isNumeric(max) || !$.isNumeric(value) || !$.isNumeric(fixedprice)) {
        alert('The Pricing Level fields must all be numeric.');
        return;
      }

      if(min>=max || min == "" || max == "" || value == "" || fixedprice == "") {
        alert('Pricing Level validation failed.');
        return;
      }

      //If the user hasn't filled in any fields yet, this will be null
      if($scope.data == null) $scope.data = { pricingLevel: [] };

      //And so will this
      if(!$scope.data.pricingLevel) $scope.data.pricingLevel = [];

      //Add it
      $scope.data.pricingLevel.push(pricinglevel);

      $("#pricinglevel_min").val("");
      $("#pricinglevel_max").val("");
      $("#pricinglevel_value").val("");
      $("#pricinglevel_fixedprice").val("");

  }

  $scope.saveCustomer = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else if(!$scope.data.pricingLevel || $scope.data.pricingLevel.length<1) {
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
