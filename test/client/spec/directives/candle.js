'use strict';

describe('Directive: candle', function () {

  // load the directive's module
  beforeEach(module('memorialApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<candle></candle>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the candle directive');
  }));
});
