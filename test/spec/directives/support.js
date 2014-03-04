'use strict';

describe('Directive: support', function () {

  // load the directive's module
  beforeEach(module('moodOrganApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<support></support>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the support directive');
  }));
});
