angular.module("abnormalloads").controller("jobController", ["$location", "$scope", "Loads", "Authorities", "Customers", "Jobs", "$routeParams", function($location, $scope, Loads, Authorities, Customers, Jobs, $routeParams) {
  //If the user hasn't filled in any fields yet, this will be null
  $scope.data = [];

  //And so will this
  $scope.data.councilAuthorities = [];
  $scope.data.policeAuthorities = [];
  $scope.data.otherAuthorities = [];

  Authorities.query({authorityType: "Council"}).then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.councilAuthorities = data;
  });

  Authorities.query({authorityType: "Police"}).then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.policeAuthorities = data;
  });

  Authorities.query({authorityType: "Other"}).then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.otherAuthorities = data;
  });

  //Get the hauliers
  Customers.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.hauliers = data;
  });

  //Get the hauliers
  Authorities.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.authorities = data;
  });

  //Get the loads
  Loads.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.loads = data;
  });

  $scope.removeAuthority = function(index, authorityType) {
    if(authorityType=="Council") {
      $scope.data.councilAuthorities.splice(index,1);
    } else if (authorityType=="Police") {
      $scope.data.policeAuthorities.splice(index,1);
    } else if(authorityType=="Other") {
      $scope.data.otherAuthorities.splice(index,1);
    } else {
      alert('Error: Unable to determine the Authority Type.');
    }

  }

  $scope.addAuthority = function(model) {
    if(model.authorityType=="Council") {
      //Make sure it hasn't already been added
      for(var x = 0;x<$scope.data.councilAuthorities.length;x++) {
        if($scope.data.councilAuthorities[x]._id==model._id) {
          alert('This authority has already been added');
          return;
        }
      }

      $scope.data.councilAuthorities.push(model);
    } else if(model.authorityType=="Police") {

      for(var x = 0;x<$scope.data.policeAuthorities.length;x++) {
        if($scope.data.policeAuthorities[x]._id==model._id) {
          alert('This authority has already been added.');
          return;
        }
      }

      $scope.data.policeAuthorities.push(model);

    } else if(model.authorityType=="Other") {

      for(var x = 0;x<$scope.data.otherAuthorities.length;x++) {
        if($scope.data.otherAuthorities[x]._id==model._id) {
          alert('This authority has already been added');
          return;
        }
      }

      $scope.data.otherAuthorities.push(model);

    } else {
      alert('Error: Unable to determine the Authority Type.');
    }
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
    } else if($scope.data.councilAuthorities.length<1 && $scope.data.policeAuthorities.length<1 && $scope.data.otherAuthorities.length<1) {
      //Make sure we have at least 1 authority
        alert('You must enter at least 1 authority before you can save.');
    } else if($scope.data.load==null) {
      //Make sure we have at least 1 authority
        alert('You must choose a Load before you can save.');
    } else if($scope.data.haulier==null) {
      //Make sure we have at least 1 authority
        alert('You must choose a Customer before you can save.');
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
