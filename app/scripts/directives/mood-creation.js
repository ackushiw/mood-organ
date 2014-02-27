'use strict';

angular.module('moodOrganApp')
  .directive('moodCreation', function () {
    return {
      restrict: 'C',
      templateUrl: 'views/mood-creation.html',
    };
  });
