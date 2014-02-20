'use strict';

angular.module('moodOrganApp')
  .directive('MoodCreation', function () {
    return {
      restrict: 'C',
      templateUrl: 'mood-creation.html',
    };
  });
