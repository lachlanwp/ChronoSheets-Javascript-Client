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
    instance = new ChronoSheetsApi.InsertUserRequest();
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

  describe('InsertUserRequest', function() {
    it('should create an instance of InsertUserRequest', function() {
      // uncomment below and update the code to test InsertUserRequest
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be.a(ChronoSheetsApi.InsertUserRequest);
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property isSubscribedToNewsletter (base name: "IsSubscribedToNewsletter")', function() {
      // uncomment below and update the code to test the property isSubscribedToNewsletter
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "Roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property alertSettings (base name: "AlertSettings")', function() {
      // uncomment below and update the code to test the property alertSettings
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "UserName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property hourlyPayRate (base name: "HourlyPayRate")', function() {
      // uncomment below and update the code to test the property hourlyPayRate
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property hourlyOvertimePayRate (base name: "HourlyOvertimePayRate")', function() {
      // uncomment below and update the code to test the property hourlyOvertimePayRate
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property currentDate (base name: "CurrentDate")', function() {
      // uncomment below and update the code to test the property currentDate
      //var instane = new ChronoSheetsApi.InsertUserRequest();
      //expect(instance).to.be();
    });

  });

}));