(function () {
	'use strict';

	angular
		.module('ngUnderscore/Service', [])

		.factory('underscore', ['$window', function ($window) {
			return $window._;
		}]);
})();
