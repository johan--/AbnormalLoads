angular.module("abnormalloads").factory("Invoices", [
  "giCrud", function(Crud) {
    var crud = Crud.factory("Invoices", true);
    return crud;
  }
]);
