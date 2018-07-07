/**
 * The ChronoSheets API
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
    factory(root.expect, root.TheChronoSheetsApi);
  }
}(this, function(expect, TheChronoSheetsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheChronoSheetsApi.CSInsertClientRequest();
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

  describe('CSInsertClientRequest', function() {
    it('should create an instance of CSInsertClientRequest', function() {
      // uncomment below and update the code to test CSInsertClientRequest
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be.a(TheChronoSheetsApi.CSInsertClientRequest);
    });

    it('should have the property clientName (base name: "ClientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientAddressLine1 (base name: "ClientAddressLine1")', function() {
      // uncomment below and update the code to test the property clientAddressLine1
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientAddressLine2 (base name: "ClientAddressLine2")', function() {
      // uncomment below and update the code to test the property clientAddressLine2
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientSuburb (base name: "ClientSuburb")', function() {
      // uncomment below and update the code to test the property clientSuburb
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientState (base name: "ClientState")', function() {
      // uncomment below and update the code to test the property clientState
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientPostCode (base name: "ClientPostCode")', function() {
      // uncomment below and update the code to test the property clientPostCode
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property personOfContact (base name: "PersonOfContact")', function() {
      // uncomment below and update the code to test the property personOfContact
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientPhoneNumber (base name: "ClientPhoneNumber")', function() {
      // uncomment below and update the code to test the property clientPhoneNumber
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientMobileNumber (base name: "ClientMobileNumber")', function() {
      // uncomment below and update the code to test the property clientMobileNumber
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientEmailAddress (base name: "ClientEmailAddress")', function() {
      // uncomment below and update the code to test the property clientEmailAddress
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientWebURL (base name: "ClientWebURL")', function() {
      // uncomment below and update the code to test the property clientWebURL
      //var instane = new TheChronoSheetsApi.CSInsertClientRequest();
      //expect(instance).to.be();
    });

  });

}));
