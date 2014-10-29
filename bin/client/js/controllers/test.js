angular.module("abnormalloads").controller("testController", ["$scope", "Tests", function($scope, Tests) {
  $scope.message = "hello javascript";
  $scope.tests = [];

  Tests.all().then(function(data) {
    $scope.tests = data;
  });

}]) ;
