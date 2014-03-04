'use strict';

angular.module('moodOrganApp')
  .directive('aboutOrgan', function () {
    return {
      restrict: 'C',
      templateUrl: 'views/about.html',
    };
  });

