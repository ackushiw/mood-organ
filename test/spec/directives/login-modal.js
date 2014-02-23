'use strict';

describe('Directive: loginModal', function () {

  // load the directive's module
  beforeEach(module('moodOrganApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should compile', inject(function ($compile) {
    element = angular.element('<login-modal></login-modal>');
    element = $compile(element)(scope);
  }));
});
