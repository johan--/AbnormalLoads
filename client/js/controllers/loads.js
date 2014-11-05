angular.module("abnormalloads").controller("loadController", ["$scope", "Loads", "$routeParams", "$location", function($scope, Loads, $routeParams, $location) {

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Loads.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

  $scope.saveLoad = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.');
    } else {
      Loads.save($scope.data).then(function() {
        $location.path("/list/loads");
      });
    }
  };

  $scope.deleteLoad = function() {
    Loads.destroy($scope.data._id);
    $location.path("/list/loads");
  };

}]) ;
