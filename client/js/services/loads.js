angular.module("abnormalloads").factory("Loads", [
  "giCrud", function(Crud) {
    var crud = Crud.factory("Loads", true);
    return crud;
  }
]);
