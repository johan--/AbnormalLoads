angular.module("abnormalloads").factory("Customers", [
  "giCrud", function(Crud) {
    var crud = Crud.factory("Customers", true);
    return crud;
  }
]);
