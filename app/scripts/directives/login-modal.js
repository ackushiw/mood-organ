'use strict';

angular.module('moodOrganApp')
	.directive('loginModal', function() {
    return {
			restrict: 'E',
			templateUrl: 'views/login-modal.html'
		};
	});
