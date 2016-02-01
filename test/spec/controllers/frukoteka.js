'use strict';

describe('Controller: FrukotekaCtrl', function () {

  // load the controller's module
  beforeEach(module('appYoApp'));

  var FrukotekaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FrukotekaCtrl = $controller('FrukotekaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FrukotekaCtrl.awesomeThings.length).toBe(3);
  });
});
