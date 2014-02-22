'use strict';

angular.module('moodOrganApp')
  .directive('moodCreation', function () {
    return {
      restrict: 'C',
      templateUrl: 'mood-creation.html',
    };
  });
