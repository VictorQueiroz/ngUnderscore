(function () {
	'use strict';

	angular
		.module('ngUnderscore', [
			'ngUnderscore/Services'
		]);
})();
(function () {
	'use strict';

	angular
		.module('ngUnderscore/Service', [])

		.factory('_', ['$window', function ($window) {
			return $window._;
		}]);
})();
(function () {
	'use strict';

	angular
		.module('ngUnderscore/Services', [
			'ngUnderscore/Service'
		]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImNvbXBvbmVudHMvbmdVbmRlcnNjb3JlLVNlcnZpY2UuanMiLCJjb21wb25lbnRzL3NlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibmctdW5kZXJzY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnbmdVbmRlcnNjb3JlJywgW1xuXHRcdFx0J25nVW5kZXJzY29yZS9TZXJ2aWNlcydcblx0XHRdKTtcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXJcblx0XHQubW9kdWxlKCduZ1VuZGVyc2NvcmUvU2VydmljZScsIFtdKVxuXG5cdFx0LmZhY3RvcnkoJ18nLCBbJyR3aW5kb3cnLCBmdW5jdGlvbiAoJHdpbmRvdykge1xuXHRcdFx0cmV0dXJuICR3aW5kb3cuXztcblx0XHR9XSk7XG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyXG5cdFx0Lm1vZHVsZSgnbmdVbmRlcnNjb3JlL1NlcnZpY2VzJywgW1xuXHRcdFx0J25nVW5kZXJzY29yZS9TZXJ2aWNlJ1xuXHRcdF0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=