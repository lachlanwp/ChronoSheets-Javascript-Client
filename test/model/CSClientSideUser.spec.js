/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JavascriptApiClientForChronoSheets);
  }
}(this, function(expect, JavascriptApiClientForChronoSheets) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JavascriptApiClientForChronoSheets.CSClientSideUser();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CSClientSideUser', function() {
    it('should create an instance of CSClientSideUser', function() {
      // uncomment below and update the code to test CSClientSideUser
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be.a(JavascriptApiClientForChronoSheets.CSClientSideUser);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "OrganisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "UserName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "Roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property alertSettings (base name: "AlertSettings")', function() {
      // uncomment below and update the code to test the property alertSettings
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property setupWizardRequired (base name: "SetupWizardRequired")', function() {
      // uncomment below and update the code to test the property setupWizardRequired
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property isSubscribedToNewsletter (base name: "IsSubscribedToNewsletter")', function() {
      // uncomment below and update the code to test the property isSubscribedToNewsletter
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

    it('should have the property organisation (base name: "Organisation")', function() {
      // uncomment below and update the code to test the property organisation
      //var instane = new JavascriptApiClientForChronoSheets.CSClientSideUser();
      //expect(instance).to.be();
    });

  });

}));
