/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/ChronoSheetsClient/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/ChronoSheetsClient/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ChronoSheetsApi.AggregateClient();
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

  describe('AggregateClient', function() {
    it('should create an instance of AggregateClient', function() {
      // uncomment below and update the code to test AggregateClient
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be.a(ChronoSheetsApi.AggregateClient);
    });

    it('should have the property clientProjects (base name: "ClientProjects")', function() {
      // uncomment below and update the code to test the property clientProjects
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "OrganisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "ClientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientAddressLine1 (base name: "ClientAddressLine1")', function() {
      // uncomment below and update the code to test the property clientAddressLine1
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientAddressLine2 (base name: "ClientAddressLine2")', function() {
      // uncomment below and update the code to test the property clientAddressLine2
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientSuburb (base name: "ClientSuburb")', function() {
      // uncomment below and update the code to test the property clientSuburb
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientState (base name: "ClientState")', function() {
      // uncomment below and update the code to test the property clientState
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientPostCode (base name: "ClientPostCode")', function() {
      // uncomment below and update the code to test the property clientPostCode
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property personOfContact (base name: "PersonOfContact")', function() {
      // uncomment below and update the code to test the property personOfContact
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientPhoneNumber (base name: "ClientPhoneNumber")', function() {
      // uncomment below and update the code to test the property clientPhoneNumber
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientMobileNumber (base name: "ClientMobileNumber")', function() {
      // uncomment below and update the code to test the property clientMobileNumber
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientEmailAddress (base name: "ClientEmailAddress")', function() {
      // uncomment below and update the code to test the property clientEmailAddress
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property clientWebURL (base name: "ClientWebURL")', function() {
      // uncomment below and update the code to test the property clientWebURL
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

    it('should have the property projectCount (base name: "ProjectCount")', function() {
      // uncomment below and update the code to test the property projectCount
      //var instane = new ChronoSheetsApi.AggregateClient();
      //expect(instance).to.be();
    });

  });

}));
