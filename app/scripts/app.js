'use strict';

angular.module('memorialApp', [
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/candles', {
        templateUrl: 'partials/candles',
        controller: 'CandlesCtrl'
      })
      .when('/eulogies', {
        templateUrl: 'partials/eulogies',
        controller: 'EulogiesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });