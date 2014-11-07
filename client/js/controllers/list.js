angular.module("abnormalloads").controller("listController", ["$scope", "Jobs", "Tests", "Customers", "Authorities", "Loads", "Payments", "Invoices", "$location", "$routeParams", function($scope, Jobs, Tests, Customers, Authorities, Loads, Payments, Invoices, $location, $routeParams) {
  $scope.message = "hello javascript";
  $scope.data = [];
  if($routeParams.type=="customers") {
    $scope.gridOptions = {
      disableSearch: false,
      displayCounts: false,
      rowSelectedEvent: "selected",
      itemsPerPage: 10,
      columns: [
        {header: "Haulier Name", property: 'haulierName', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Tel", property: 'tel', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Postcode", property: 'postcode', type: 'gi-dtproperty', visible: true, search: true}
      ]
    };

    Customers.all().then(function(data) {
      $scope.data = data;
    });

  } else if ($routeParams.type=="loads") {
    $scope.gridOptions = {
      disableSearch: false,
      displayCounts: false,
      rowSelectedEvent: "selected",
      itemsPerPage: 10,
      columns: [
        {header: "Load Name", property: 'name', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Vehicle Length", property: 'vehicleLength', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Gross Weight", property: 'grossWeight', type: 'gi-dtproperty', visible: true, search: true}
      ]
    };

    Loads.all().then(function(data) {
      $scope.data = data;
    });

  } else if ($routeParams.type=="jobs") {
    $scope.gridOptions = {
      disableSearch: false,
      displayCounts: false,
      rowSelectedEvent: "selected",
      itemsPerPage: 10,
      columns: [
        {header: "Job Id", property: '_id', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Date From", property: 'dateFrom', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Date To", property: 'dateTo', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Ref", property: 'ref', type: 'gi-dtproperty', visible: true, search: true}
      ]
    };

    Jobs.all().then(function(data) {
      $scope.data = data;
    });

  } else if ($routeParams.type=="authorities") {
    $scope.gridOptions = {
      disableSearch: false,
      displayCounts: false,
      rowSelectedEvent: "selected",
      itemsPerPage: 10,
      columns: [
        {header: "Name", property: 'name', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Authority Type", property: 'authorityType', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Postcode", property: 'postcode', type: 'gi-dtproperty', visible: true, search: true}
      ]
    };

    Authorities.all().then(function(data) {
      $scope.data = data;
    });

  } else if ($routeParams.type=="payments") {
    $scope.gridOptions = {
      disableSearch: false,
      displayCounts: false,
      rowSelectedEvent: "selected",
      itemsPerPage: 10,
      columns: [
        {header: "Id", property: '_id', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Amount", property: 'name', type: 'gi-dtproperty', visible: true, search: true},
        {header: "Date", property: 'date', type: 'gi-dtproperty', visible: true, search: true}
      ]
    };

    Payments.all().then(function(data) {
      $scope.data = data;
    });

  // } else if ($routeParams.type=="invoices") {
  //   $scope.gridOptions = {
  //     disableSearch: false,
  //     displayCounts: false,
  //     rowSelectedEvent: "selected",
  //     itemsPerPage: 10,
  //     columns: [
  //       {header: "Id", property: '_id', type: 'gi-dtproperty', visible: true, search: true}
  //     ]
  //   };
  //
  //   Invoices.all().then(function(data) {
  //     $scope.data = data;
  //   });

  } else {
    alert('Entity Type Not Recognised.')
  }

  $scope.add = function() {
    $location.path("/" + $routeParams.type + "/add");

    //if($routeParams.type=="customers") {

    //} else if ($routeParams.type=="loads") {

    //} else if ($routeParams.type=="authorities") {

    //} else {
    //  alert('Entity Type Not Recognised.')
    //}

  }

  function _rowSelected(e, row) {
    //Use the route param to determine how to open it
    $location.path("/" + $routeParams.type + "/" + row._id);
  }

  $scope.$on ("selected", _rowSelected);

}]) ;
