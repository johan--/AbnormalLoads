angular.module("abnormalloads").controller("testController", ["$scope", "Tests", "$routeParams", function($scope, Tests, $routeParams) {
  $scope.message = "hello javascript";
  $scope.data = [];

  Tests.get($routeParams.id).then(function(data) {
    $scope.data = data;
  });

  $scope.ok = function() {
    Tests.save($scope.data).then(function(err, data) {
      alert("Test for error, but should be OK.");
    });
  }

}]) ;
