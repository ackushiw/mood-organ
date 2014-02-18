'use strict';

describe('Controller: MoodorgancontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('moodOrganApp'));

  var MoodorgancontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoodorgancontrollerCtrl = $controller('MoodorgancontrollerCtrl', {
      $scope: scope
    });
  }));
});
