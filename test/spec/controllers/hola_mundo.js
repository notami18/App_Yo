'use strict';

describe('Controller: HolaMundoCtrl', function () {

  // load the controller's module
  beforeEach(module('appYoApp'));

  var HolaMundoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HolaMundoCtrl = $controller('HolaMundoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HolaMundoCtrl.awesomeThings.length).toBe(3);
  });
});
