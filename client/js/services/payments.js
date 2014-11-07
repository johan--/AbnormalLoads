angular.module("abnormalloads").factory("Payments", [
  "giCrud", function(Crud) {
    var crud = Crud.factory("Payments", true);
    return crud;
  }
]);
