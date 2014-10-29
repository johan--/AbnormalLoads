angular.module('abnormalloads').config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/home.html'
    })
    .when('/customers', {
      templateUrl: '/views/customer.html',
      controller: 'customerController'
    })
    .otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);
