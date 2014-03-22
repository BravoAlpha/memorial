'use strict';

describe('Directive: focusWhen', function () {

  // load the directive's module
  beforeEach(module('memorialApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<focus-when></focus-when>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the focusWhen directive');
  }));
});
