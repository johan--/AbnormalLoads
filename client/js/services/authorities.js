angular.module("abnormalloads").factory("Authorities", [
  "giCrud", function(Crud) {
    var crud = Crud.factory("Authorities", true);
    return crud;
  }
]);
