(function () {
	'use strict';

	angular
		.module('ngUnderscore/Service', [])

		.factory('_', ['$window', function ($window) {
			return $window._;
		}]);
})();