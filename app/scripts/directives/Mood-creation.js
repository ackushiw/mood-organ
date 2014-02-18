'use strict';

angular.module('moodOrganApp')
  .directive('MoodCreation', function () {
    return {
      restrict: 'C',
      authRequired: false, // if true, must log in before viewing this page
      templateUrl: 'mood-creation.html',
    };
  });
