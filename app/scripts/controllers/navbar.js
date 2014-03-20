'use strict';

angular.module('memorialApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'על שירן',
      'link': '/about'
    }, {
      'title': 'דברים שבלב',
      'link': '/memories'
    }, {
      'title': 'תמונות',
      'link': '/pictures'
    }, {
      'title': 'הדלק נר',
      'link': '/candles'
    }];
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
