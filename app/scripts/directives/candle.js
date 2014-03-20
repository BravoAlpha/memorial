'use strict';

angular.module('memorialApp').directive('candle', function () {
  return {
		restrict: 'E',
		replace: true,
		scope: {
			name: '=',
			date: '=',
			content: '='
		},
		templateUrl: 'partials/candle.html'
  };
});
