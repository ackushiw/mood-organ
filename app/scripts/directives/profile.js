'use strict';

angular.module('moodOrganApp')
  .directive('profile', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the profile directive');
      }
    };
  });
