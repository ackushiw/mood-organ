'use strict';

angular.module('moodOrganApp')
  .directive('support', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the support directive');
      }
    };
  });
