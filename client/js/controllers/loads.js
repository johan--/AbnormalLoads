angular.module("abnormalloads").controller("loadController", ["$scope", "Loads", "$routeParams", function($scope, Loads, $routeParams) {
  $scope.customer = {};

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Loads.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

//  Customers.all().then(function(data) {
//  $scope.customers = data;
//  });


  $scope.saveLoad = function() {
      Loads.save($scope.data).then(function() {
        $location.path("/list/loads");
      });
  };

  $scope.deleteLoad = function() {
    Loads.destroy($scope.data._id);
    $location.path("/list/loads");
  };


//  $scope.selectCustomer = function(rec) {
//    $scope.customer = rec;
//  };

}]) ;
