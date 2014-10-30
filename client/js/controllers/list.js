angular.module("abnormalloads").controller("listController", ["$scope", "Tests", "$location", function($scope, Tests, $location) {
  $scope.message = "hello javascript";
  $scope.data = [];

  $scope.gridOptions = {
    disableSearch: false,
    displayCounts: false,
    rowSelectedEvent: "selected",
    itemsPerPage: 10,
    columns: [
      {header: "First Name", property: 'firstName', type: 'gi-dtproperty', visible: true, search: true},
      {header: "Middle Name", property: 'middleName', type: 'gi-dtproperty', visible: true, search: true},
      {header: "Surname", property: 'surname', type: 'gi-dtproperty', visible: true, search: true}
    ]
  };

  function _rowSelected(e, row) {
    $location.path("/tests/" + row._id);
  }

  $scope.$on ("selected", _rowSelected);

  Tests.all().then(function(data) {
    $scope.data = data;
  });

}]) ;
