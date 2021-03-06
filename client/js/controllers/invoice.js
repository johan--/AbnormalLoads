angular.module("abnormalloads").controller("invoiceController", ["$location", "$scope", "Invoices", "Jobs", "$routeParams", "$window", "Customers", function($location, $scope, Invoices, Jobs, $routeParams, $window, Customers) {
  //If the user hasn't filled in any fields yet, this will be null
  $scope.data = {};
  $scope.data.paid = false;
  $scope.data.jobs = [];
  $scope.showPrint = false;

  //And so will this
  $scope.availableJobs = [];

  $scope.availableHauliers = [];

  $scope.outstandinginvoices = [];

  Customers.all().then(function(data) {
    for(var x=0;x<data.length;x++) {
      data[x].id = data[x]._id;
    }
    $scope.availableHauliers = data;
  });

  $scope.searchJobs = function() {

    Jobs.query({ "query": { "haulierId": $scope.selectedHaulier._id, "dateFrom": {"$gte": $scope.jobSearchFrom, "$lt": $scope.jobSearchTo } } } ).then(function(data) {
      for(var x=0;x<data.length;x++) {
        data[x].id = data[x]._id;
      }
      $scope.availableJobs = data;
    });

    //Jobs.query({ haulierId: $scope.selectedHaulier._id }).then(function(data) {
    //  for(var x=0;x<data.length;x++) {
    //    data[x].id = data[x]._id;
    //  }
    //  $scope.availableJobs = data;
    //});

  }

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
    Invoices.get($routeParams.id).then(function(data) {
      $scope.data = data;

      $scope.showPrint = true;
    });
  }

  $scope.generateInvoice = function() {
    //Generate a printable invoice for this model
    $window.open("/invoices/generateinvoice/" + $routeParams.id);
    //$location.path("/invoices/generateinvoice/" + $routeParams.id);

  }

  $scope.saveInvoice = function() {
    if($(".ng-invalid") && $(".ng-invalid").length>0) {
      alert('You must complete all fields before you can save.')
    } else if($scope.data.jobs.length<1) {
      //Make sure we have at least 1 job
      alert('You must select at least 1 job before you can save.');
    } else {
      for(var x=0;x<$scope.data.jobs.length;x++) {
        $scope.data.jobs[x].id=$scope.data.jobs[x]._id;
      }

      Invoices.save($scope.data).then(function() {
        $location.path("/list/invoices");
      });
    }
  };

  $scope.getTotalCost = function() {
    var totalCost = 0;
    for(var x=0;x<$scope.data.jobs.length;x++) {
      totalCost = totalCost + $scope.data.jobs[x].price;
    }

    return totalCost;
  }

  Invoices.query({ paid: false }).then(function(data) {
    $scope.outstandinginvoices = data;
  });

  $scope.deleteInvoice = function() {
    Invoices.destroy($scope.data._id);
    $location.path("/list/invoices");
  };

}]) ;
