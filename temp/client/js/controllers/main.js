angular.module('abnormalloads').controller('mainController', [
  '$scope', '$http', 'Auth', function($scope, $http, Auth) {
    var getMe;
    getMe = function() {
      return Auth.me().then(function(me) {
        $scope.me = me;
        if (me.loggedIn) {
          return $scope.$broadcast('event:auth-login-complete', me);
        } else {
          return $scope.$broadcast('event:auth-logout-complete', me);
        }
      });
    };
    getMe();
    return $scope.$on('event:auth-loginChange', function() {
      return getMe();
    });
  }
]);
