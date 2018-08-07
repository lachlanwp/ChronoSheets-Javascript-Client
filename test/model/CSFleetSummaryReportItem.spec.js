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
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ChronoSheetsApi.CSFleetSummaryReportItem();
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

  describe('CSFleetSummaryReportItem', function() {
    it('should create an instance of CSFleetSummaryReportItem', function() {
      // uncomment below and update the code to test CSFleetSummaryReportItem
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be.a(ChronoSheetsApi.CSFleetSummaryReportItem);
    });

    it('should have the property totalDistanceMetersFiltered (base name: "TotalDistanceMetersFiltered")', function() {
      // uncomment below and update the code to test the property totalDistanceMetersFiltered
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property totalDistanceMeters (base name: "TotalDistanceMeters")', function() {
      // uncomment below and update the code to test the property totalDistanceMeters
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property totalRunningCostDollarsFiltered (base name: "TotalRunningCostDollarsFiltered")', function() {
      // uncomment below and update the code to test the property totalRunningCostDollarsFiltered
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property totalRunningCostDollars (base name: "TotalRunningCostDollars")', function() {
      // uncomment below and update the code to test the property totalRunningCostDollars
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property organisationId (base name: "OrganisationId")', function() {
      // uncomment below and update the code to test the property organisationId
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property costPerKilometer (base name: "CostPerKilometer")', function() {
      // uncomment below and update the code to test the property costPerKilometer
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property make (base name: "Make")', function() {
      // uncomment below and update the code to test the property make
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "Model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "Year")', function() {
      // uncomment below and update the code to test the property year
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property licencePlateNumber (base name: "LicencePlateNumber")', function() {
      // uncomment below and update the code to test the property licencePlateNumber
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "IsDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

    it('should have the property permittedEmployees (base name: "PermittedEmployees")', function() {
      // uncomment below and update the code to test the property permittedEmployees
      //var instane = new ChronoSheetsApi.CSFleetSummaryReportItem();
      //expect(instance).to.be();
    });

  });

}));