angular.module('abnormalloads').controller('mainController', [
  '$scope', '$http', 'Auth', '$rootScope', function($scope, $http, Auth, $rootScope) {
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

    $rootScope.vatRate = 0.2;
  }
]);
