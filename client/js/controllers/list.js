angular.module("abnormalloads").controller("listController", ["$scope", "Tests", "Customers", "Authorities", "Loads", "$location", "$routeParams", function($scope, Tests, Customers, Authorities, Loads, $location, $routeParams) {
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
