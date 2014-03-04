'use strict';

describe('Directive: moodStream', function () {

  // load the directive's module
  beforeEach(module('moodOrganApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mood-stream></mood-stream>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the moodStream directive');
  }));
});
