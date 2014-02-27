'use strict';
angular.module('moodOrganApp')
    .directive('moodNav', function() {
        return {
            restrict: 'C',
            templateUrl: 'views/nav.html',

        };
    });