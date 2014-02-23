'use strict';

describe('Directive: MoodCreation', function () {

  // load the directive's module
  beforeEach(module('moodOrganApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should compile', inject(function ($compile) {
    element = angular.element('<-mood-creation></-mood-creation>');
    element = $compile(element)(scope);
  }));
});
