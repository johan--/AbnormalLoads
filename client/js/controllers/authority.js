angular.module("abnormalloads").controller("authorityController", ["$location", "$scope", "Authorities", "$routeParams", function($location, $scope, Authorities, $routeParams) {

  if($routeParams.id=="add") {
    //Add new
    $scope.showDelete = false;
  } else {
    //Id passed in, grab it
    Authorities.get($routeParams.id).then(function(data) {
      $scope.data = data;
      $scope.showDelete = true;
    });
  }

  $scope.saveAuthority = function() {
    Authorities.save($scope.data).then(function() {
      $location.path("/list/authorities");
    });
  };

  $scope.deleteAuthority = function() {
    Authorities.destroy($scope.data._id);
    $location.path("/list/authorities");
  };

}]) ;
