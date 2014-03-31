'use strict';

// References:
// https://groups.google.com/forum/#!topic/angular/LjwlVYMulN8
// By Rafael Dipold: http://jsbin.com/isagac/1/edit
// Slightly modified to use memoize instead of $rootScope.
angular.module('memorialApp').filter('inSlicesOf', function() {
	return _.memoize(function(items, count) {
		if (!count) {
			count = 3;
		}

		if (!angular.isArray(items) && !angular.isString(items)) {
			return items;
		}
		
		var array = [];
		for (var i = 0; i < items.length; i++) {
			var chunkIndex = parseInt(i / count, 10);
			var isFirst = (i % count === 0);
			if (isFirst) {
				array[chunkIndex] = [];
			}

			array[chunkIndex].push(items[i]);
		}
			
		return array;
	});
});