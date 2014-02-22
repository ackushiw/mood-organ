'use strict';

angular.module('moodOrganApp')
	.directive('loginModal', function() {
		console.log('login-modal directive');
    return {
			restrict: 'E',
			templateUrl: 'views/login-modal.html'
		};
	});
