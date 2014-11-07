angular.module('abnormalloads').config([
  '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: '/views/home.html'
    })
    .when('/payments/:id', {
      templateUrl: '/views/payment.html',
      controller: 'paymentController'
    })
    .when('/payments', {
      templateUrl: '/views/payment.html',
      controller: 'paymentController'
    })
    .when('/customers', {
      templateUrl: '/views/customerlist.html',
      controller: 'customerlistController'
    })
    .when('/jobs/:id', {
      templateUrl: '/views/job.html',
      controller: 'jobController'
    })
    .when('/customers/:id', {
      templateUrl: '/views/customer.html',
      controller: 'customerController'
    })
    .when('/loads', {
      templateUrl: '/views/load.html',
      controller: 'loadController'
    })
    .when('/loads/:id', {
      templateUrl: '/views/load.html',
      controller: 'loadController'
    })
    .when('/loads/add', {
      templateUrl: '/views/load.html',
      controller: 'loadController'
    })
    .when('/jobs', {
      templateUrl: '/views/job.html',
      controller: 'jobController'
    })
    .when('/authorityTypes', {
      templateUrl: '/views/authorityTypes.html',
      controller: 'authorityTypesController'
    })
    .when('/tests', {
      templateUrl: '/views/list.html',
      controller: 'listController'
    })
    .when('/list/:type', {
      templateUrl: '/views/list.html',
      controller: 'listController'
    })
    .when('/tests/:id', {
      templateUrl: '/views/test.html',
      controller: 'testController'
    })
    .when('/customers/add', {
      templateUrl: '/views/test.html',
      controller: 'testController'
    })
    .when('/authorities/add', {
      templateUrl: '/views/authority.html',
      controller: 'authorityController'
    })
    .when('/authorities/:id', {
      templateUrl: '/views/authority.html',
      controller: 'authorityController'
    })
    .when('/loads/add', {
      templateUrl: '/views/load.html',
      controller: 'loadController'
    })
    .when('/authorities/add', {
      templateUrl: '/views/authority.html',
      controller: 'authorityController'
    })

    .otherwise({
      redirectTo: '/'
    });
    return $locationProvider.html5Mode(true).hashPrefix('!');
  }
]);
