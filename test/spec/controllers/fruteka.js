'use strict';

describe('Controller: FrutekaCtrl', function () {

  // load the controller's module
  beforeEach(module('appYoApp'));

  var FrutekaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FrutekaCtrl = $controller('FrutekaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FrutekaCtrl.awesomeThings.length).toBe(3);
  });
});
