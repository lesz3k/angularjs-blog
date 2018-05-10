/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />
/// <reference path="../../../app/scripts/controllers/addpost.ts" />

'use strict';

describe('Controller: AddPostCtrl', () => {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AddPostCtrl: clientApp.AddPostCtrl,
    scope: clientApp.IAddPostScope;

  // Initialize the controller and a mock scope
  beforeEach(inject(($controller: ng.IControllerService, $rootScope: ng.IRootScopeService) => {
    scope = <any>$rootScope.$new();
    AddPostCtrl = $controller('AddPostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', () => {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
