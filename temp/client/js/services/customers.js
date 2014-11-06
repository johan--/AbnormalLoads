angular.module("abnormalloads").factory("Jobs", [
  "giCrud", function(Crud) {
    var crud = Crud.factory("Jobs", true);
    return crud;
  }
]);
