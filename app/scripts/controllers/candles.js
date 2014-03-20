'use strict';

angular.module('memorialApp').controller('CandlesCtrl', function ($scope, $http) {

	$scope.newCandle = {};
	$scope.showDialog = false;

	$http.get('/api/candles').success(function(candles) {
		$scope.candles = candles;
	});

	$scope.addCandle = function() {
		$http.post('/api/candles', $scope.newCandle)
			.then(function(res){
				$scope.candles.push(res.data);
				$scope.newCandle= {};
				$scope.showDialog = false;
			});
	};
});
