'use strict';

angular.module('memorialApp').directive('focusWhen', function ($timeout) {
	return {
		restrict: 'A',
		link: function postLink(scope, element, attrs) {
			scope.$watch(attrs.focusWhen, function(value){
				if (value === true) {
					$timeout(function(){
						element[0].focus();
					}, 0);
				}
			});
		}
	};
});
