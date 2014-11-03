angular.module('abnormalloads').config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/home.html'
    })
    .when('/customers', {
      templateUrl: '/views/customerlist.html',
      controller: 'customerlistController'
    })
    .when('/customers/:id', {
      templateUrl: '/views/customer.html',
      controller: 'customerController'
    })
    .when('/loads', {
      templateUrl: '/views/load.html',
      controller: 'loadController'
    })
    .when('/jobs', {
      templateUrl: '/views/job.html',
      controller: 'jobController'
    })
    .when('/authorities', {
      templateUrl: '/views/authorities.html',
      controller: 'authorityController'
    })
    .when('/authorityTypes', {
      templateUrl: '/views/authorityTypes.html',
      controller: 'authorityTypesController'
    })
    .when('/tests', {
      templateUrl: '/views/list.html',
      controller: 'listController'
    })
    .when('/tests/:id', {
      templateUrl: '/views/test.html',
      controller: 'testController'
    })
    .otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);
