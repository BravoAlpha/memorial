'use strict';

describe('Filter: inSlicesOf', function () {

  // load the filter's module
  beforeEach(module('memorialApp'));

  // initialize a new instance of the filter before each test
  var inSlicesOf;
  beforeEach(inject(function ($filter) {
    inSlicesOf = $filter('inSlicesOf');
  }));

  it('should return the input prefixed with "inSlicesOf filter:"', function () {
    var text = 'angularjs';
    expect(inSlicesOf(text)).toBe('inSlicesOf filter: ' + text);
  });

});
