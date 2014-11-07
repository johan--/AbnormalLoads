angular.module("abnormalloads").controller("paymentController", ["$location", "$scope", "Payments", "Jobs", "$routeParams", function($location, $scope, Payments, Jobs, $routeParams) {
  //If the user hasn't filled in any fields yet, this will be null
  $scope.data = {};
  $scope.data.jobs = [];

  //And so will this
  $scope.data.availableJobs = [];

  Jobs.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.availableJobs = data;
  });

  $scope.removeJob = function(index) {
    $scope.data.jobs.splice(index,1);
  }

  $scope.addJob = function(model) {
      //Make sure it hasn't already been added
      for(var x = 0;x<$scope.data.jobs.length;x++) {
        if($scope.data.jobs[x]._id==model._id) {
          alert('This Job has already been added');
          return;
        }
      }

      $scope.data.jobs.push(model);
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
    } else if($scope.data.jobs.length<1) {
      //Make sure we have at least 1 job
      alert('You must select at least 1 job before you can save.');
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
