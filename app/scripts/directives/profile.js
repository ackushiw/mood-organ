'use strict';

angular.module('moodOrganApp')
	.directive('profile', function() {
    return {
			restrict: 'E',
			templateUrl: 'views/profile.html'
		};
	});

