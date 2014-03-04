'use strict';

angular.module('moodOrganApp')
	.directive('supportModal', function() {
    return {
			restrict: 'E',
			templateUrl: 'views/support.html'
		};
	});

