'use strict';

describe('Service: Moodlist', function () {

  // load the service's module
  beforeEach(module('moodOrganApp'));

  // instantiate service
  var Moodlist;
  beforeEach(inject(function (_Moodlist_) {
    Moodlist = _Moodlist_;
  }));

  it('should do something', function () {
    expect(!!Moodlist).toBe(true);
  });

});
