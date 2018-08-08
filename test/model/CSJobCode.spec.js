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
    instance = new JavascriptApiClientForChronoSheets.CSJobCode();
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

  describe('CSJobCode', function() {
    it('should create an instance of CSJobCode', function() {
      // uncomment below and update the code to test CSJobCode
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be.a(JavascriptApiClientForChronoSheets.CSJobCode);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "Code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

    it('should have the property client (base name: "Client")', function() {
      // uncomment below and update the code to test the property client
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "ClientId")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "Project")', function() {
      // uncomment below and update the code to test the property project
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "ProjectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "OrganisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "IsDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new JavascriptApiClientForChronoSheets.CSJobCode();
      //expect(instance).to.be();
    });

  });

}));
