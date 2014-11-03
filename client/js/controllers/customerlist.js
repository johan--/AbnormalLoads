angular.module("abnormalloads").controller("customerlistController", ["$scope", "Customers", "$location", function($scope, Customers, $location) {
  $scope.message = "hello javascript";
  $scope.data = [];

  $scope.gridOptions = {
    disableSearch: false,
    displayCounts: false,
    rowSelectedEvent: "selected",
    itemsPerPage: 10,
    columns: [
      {header: "Haulier Name", property: 'haulierName', type: 'gi-dtproperty', visible: true, search: true},
      {header: "Address", property: 'address', type: 'gi-dtproperty', visible: true, search: true},
      {header: "Postcode", property: 'postcode', type: 'gi-dtproperty', visible: true, search: true}
    ]
  };

  function _rowSelected(e, row) {
    $location.path("/customers/" + row._id);
  }

  $scope.$on ("selected", _rowSelected);

  Customers.all().then(function(data) {
    $scope.data = data;
  });

}]) ;
