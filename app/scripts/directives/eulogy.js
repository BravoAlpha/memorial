'use strict';

angular.module('memorialApp').directive('eulogy', function () {
  return {
		restrict: 'E',
		replace: true,
		scope: {
			name: '=',
			date: '=',
			content: '='
		},
		templateUrl: 'partials/eulogy.html'
  };
});
