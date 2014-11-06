angular.module("abnormalloads").controller("jobController", ["$location", "$scope", "Loads", "Authorities", "Customers", "Jobs", "$routeParams", function($location, $scope, Loads, Authorities, Customers, Jobs, $routeParams) {
  //If the user hasn't filled in any fields yet, this will be null
  $scope.data = [];

  //And so will this
  $scope.data.authorities = [];

  //Get the hauliers
  Customers.all().then(function(data) {
    $scope.hauliers = data;
  });

  //Get the hauliers
  Authorities.all().then(function(data) {
    $scope.authorities = data;
  });

  //Get the loads
  Loads.all().then(function(data) {
    $scope.loads = data;
  });

  $scope.removeAuthority = function(index) {
    $scope.data.authorities.splice(index,1);
  }

  $scope.addAuthority = function(model) {
    $scope.data.authorities.push(model);
  }

  if($routeParams.id=="add") {
    //Add new
  } else {
    //Id passed in, grab it
    Jobs.get($routeParams.id).then(function(data) {
      $scope.data = data;
    });
  }

  $scope.saveJob = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else {
      Jobs.save($scope.data).then(function() {
        $location.path("/list/jobs");
      });
    }
  };

  $scope.deleteJob = function() {
    Jobs.destroy($scope.data._id);
    $location.path("/list/jobs");
  };

}]) ;
