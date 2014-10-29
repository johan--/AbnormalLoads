angular.module("abnormalloads").factory("Tests", [
  "giCrud", function(Crud) {
    var crud = Crud.factory("Tests", true);
    return crud;
  }
]);
