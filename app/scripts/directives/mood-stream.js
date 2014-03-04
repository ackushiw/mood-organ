'use strict';

angular.module('moodOrganApp')
	.directive('moodStream', function() {
    return {
			restrict: 'E',
			templateUrl: 'views/mood-stream.html'
		};
	});


