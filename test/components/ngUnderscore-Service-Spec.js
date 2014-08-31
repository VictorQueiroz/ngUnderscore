(function () {
	'use strict';

	var MODULE_NAME = 'ngUnderscore/Service',
	MODULE_DEPENDENCIES = [],
	MODULE_CONTROLLERS = [],
	MODULE_DIRECTIVES = [];

	describe(MODULE_NAME + ' module', function () {
		beforeEach(module(MODULE_NAME));

		MODULE_DEPENDENCIES.forEach(function (dependency) {
			beforeEach(module(dependency));
		});

		describe('services', function () {
			describe('ngUnderscore', function () {
				var underscore, i, ids, id;

				beforeEach(inject(function ($injector) {
					underscore = $injector.get('underscore');
				}));

				it('should filter an array', function () {
					ids = [];

					for(i=1; i<40; i++) {
						ids.push({id: i});
					}

					id = underscore.filter(ids, function (id) {
						return (id.id === 10);
					});

					expect(id[0].id).toBe(10);
				});
			});
		});
	});
})();
