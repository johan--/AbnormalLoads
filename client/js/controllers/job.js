angular.module("abnormalloads").controller("jobController", ["$location", "$scope", "$rootScope", "Loads", "Authorities", "Customers", "Jobs", "$routeParams", function($location, $scope, $rootScope, Loads, Authorities, Customers, Jobs, $routeParams) {
  //If the user hasn't filled in any fields yet, this will be null
  var _vatRate = 0;
  $scope.data = {};
  $scope.lookups = {
    authorities: [],
    selectedAuthority: null
  };
  //$scope.lookups.haulier = {};
  //$scope.lookups.load = {};

  //And so will this
  $scope.data.haulier = {};
  $scope.showDelete = false;
  $scope.showGenerateNotice = false;

  $scope.data.councilAuthorities = [];
  $scope.data.policeAuthorities = [];
  $scope.data.otherAuthorities = [];

  $scope.generateNotice = function() {
    $location.path("jobs/generatenotice/" + $scope.data._id);
  }

  $scope.$watch('lookups.haulier', function() {
    $scope.priceJob();
  });

  Authorities.query().then(function(data) {
    $scope.lookups.authorities = data;
  });

  //Get the hauliers
  Customers.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.hauliers = data;
  });

  //Get the loads
  Loads.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.loads = data;
  });

  $scope.filterAuthorities = function(filter) {
    var opts = {
      name: "startswith|" + filter
    };
    return Authorities.query(opts);
  };

  $scope.authoritySelected = function($item, $model, $label) {
    var type = $item.authorityType.toLowerCase();
    var ar = $scope.data[type + "Authorities"];
    var fnd = false;

    // Check if we've already added this authority
    for (var i=0; i < ar.length; i++) {
      if (ar[i]._id == $item._id) {
        fnd = true;
        break;
      }
    }

    if (!fnd) {
      ar.push($item);
    }

    $scope.lookups.selectedAuthority = null;

  };

  $scope.removeAuthority = function(idx, type) {
    var ar = $scope.data[type + "Authorities"];

    if (!!type) {
      ar.splice(idx, 1);
    }
  };

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
  };

  $scope.priceJob = function() {
    var rules = [];
    var min = 0;
    var max = 0;
    var value = 0;
    var fixed = 0;
    var measure = 0;
    var price = 0;
    var ret = 0;

    if($scope.data.numberOfComms==null) {
      $scope.data.price = 0;
      return ret;
    }

    if ($scope.lookups.haulier) {
      rules = $scope.lookups.haulier.pricingLevel;
      for (var i=0; rules && i < rules.length; i++) {
        measure = $scope.data.numberOfComms;
        min = Number(rules[i].min);
        max = Number(rules[i].max);
        value = Number(rules[i].value);
        fixed = Number(rules[i].fixedPrice);

        if (!max) max = Number.MAX_VALUE;
        if (measure < max) max = measure;
        measure = (max - min + 0.00000001);
        if (measure < 0) measure = 0;
        measure = Math.ceil(measure);

        price += (measure * value);
        if (fixed) {
          price += fixed;
        }
      }

      $scope.data.price = Number(price.toFixed(2));
      $scope.data.vatRate = _vatRate;
      $scope.data.vat = price * $scope.data.vatRate;
      $scope.data.vat = Number($scope.data.vat.toFixed(2));
      //ret = Number(ret);
    }
    return ret;
  };

  if($routeParams.id=="add") {
    //Add new

  } else {
    //Id passed in, grab it
    Jobs.get($routeParams.id).then(function(data) {
      $scope.data = data;
      $scope.showDelete = true;
      $scope.showGenerateNotice = true;

      Loads.get(data.load.id).then(function(load) {
        load.id = load._id;
        $scope.lookups.load = load;
      });

      Customers.get(data.haulier.id).then(function(haulier) {
        haulier.id = haulier._id;
        $scope.lookups.haulier = haulier;
      });

      //Get all the authorities
      // for(var x=0;x<data.councilAuthorities.length;x++) {
      //   Authorities.get(data.councilAuthorities[x].id).then(function(authority) {
      //     $scope.councilAuthorities[x] = authority;
      //   });
      // }

    });
  }

  $scope.saveJob = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else if($scope.data.councilAuthorities.length<1 && $scope.data.policeAuthorities.length<1 && $scope.data.otherAuthorities.length<1) {
      //Make sure we have at least 1 authority
        alert('You must enter at least 1 authority before you can save.');
    } else if($scope.lookups.load==null) {
      //Make sure we have at least 1 authority
        alert('You must choose a Load before you can save.');
    } else if($scope.lookups.haulier==null) {
      //Make sure we have at least 1 authority
        alert('You must choose a Customer before you can save.');
    } else {
      // $scope.data.councilAuthorities = null;
      // $scope.data.policeAuthorities = null;
      // $scope.data.otherAuthorities = null;
      // $scope.data.haulier = null;
      // $scope.data.load = null;
      // $scope.data.history = null;

      //Set the haulier and load
      //$scope.data.haulier = $scope.lookups.haulier.id;

      $scope.data.haulierId = $scope.lookups.haulier.id;
      $scope.data.haulier = $scope.lookups.haulier;
      //$scope.data.haulier.haulierName = $scope.lookups.haulier.haulierName;

      $scope.data.customerCode = $scope.lookups.haulier.customerCode;
      $scope.data.load = $scope.lookups.load;

      // for(var x=0;x<$scope.data.councilAuthorities.length;x++) {
      //   $scope.data.councilAuthorities[x] = $scope.data.councilAuthorities[x].id;
      // }
      //
      // for(var x=0;x<$scope.data.policeAuthorities.length;x++) {
      //   $scope.data.policeAuthorities[x] = $scope.data.policeAuthorities[x].id;
      // }
      //
      // for(var x=0;x<$scope.data.otherAuthorities.length;x++) {
      //   $scope.data.otherAuthorities[x] = $scope.data.otherAuthorities[x].id;
      // }

      // $scope.data.authorities = [];
      // for(var x=0;x<$scope.data.councilAuthorities.length;x++) {
      //   $scope.data.authorities.push($scope.data.councilAuthorities[x]);
      // }
      //
      // for(var x=0;x<$scope.data.policeAuthorities.length;x++) {
      //   $scope.data.authorities.push($scope.data.policeAuthorities[x]);
      // }
      //
      // for(var x=0;x<$scope.data.otherAuthorities.length;x++) {
      //   $scope.data.authorities.push($scope.data.otherAuthorities[x]);
      // }

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
