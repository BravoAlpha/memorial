'use strict';

angular.module('memorialApp').directive('modalDialog', function () {
  return {
		restrict: 'EA',
		replace: true,
		transclude: true,
		templateUrl: 'partials/modalDialog.html',
		scope: {
			show: '=',
		},
		link: function(scope) {
			if (!scope.show) {
				scope.initialClass = 'ng-hide-add-active';
			}
		}
  };
});
