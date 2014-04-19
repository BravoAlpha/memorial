'use strict';

angular.module('memorialApp').controller('EulogiesCtrl', function ($scope, $http) {
	$scope.newEulogy = {};
	$scope.showDialog = false;

	$http.get('/api/eulogies').success(function(eulogies) {
		$scope.eulogies = eulogies;
	});

	$scope.addEulogy = function() {
		$http.post('/api/eulogies', $scope.newEulogy)
			.then(function(res){
				$scope.eulogies.push(res.data);
				$scope.newEulogy= {};
				$scope.showDialog = false;
			});
	};
});
