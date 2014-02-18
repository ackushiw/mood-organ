'use strict';

angular.module('moodOrganApp')
    .directive('loginModal', function() {
        return {
            restrict: 'C',
            templateUrl: 'login-modal.html',


        };
    });
