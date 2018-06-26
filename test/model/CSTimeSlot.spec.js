/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
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
    instance = new ChronoSheetsApi.CSTimeSlot();
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

  describe('CSTimeSlot', function() {
    it('should create an instance of CSTimeSlot', function() {
      // uncomment below and update the code to test CSTimeSlot
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be.a(ChronoSheetsApi.CSTimeSlot);
    });

    it('should have the property dayType (base name: "DayType")', function() {
      // uncomment below and update the code to test the property dayType
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be();
    });

    it('should have the property usualHourId (base name: "UsualHourId")', function() {
      // uncomment below and update the code to test the property usualHourId
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be();
    });

    it('should have the property startHour (base name: "StartHour")', function() {
      // uncomment below and update the code to test the property startHour
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be();
    });

    it('should have the property startMinute (base name: "StartMinute")', function() {
      // uncomment below and update the code to test the property startMinute
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be();
    });

    it('should have the property endHour (base name: "EndHour")', function() {
      // uncomment below and update the code to test the property endHour
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be();
    });

    it('should have the property endMinute (base name: "EndMinute")', function() {
      // uncomment below and update the code to test the property endMinute
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be();
    });

    it('should have the property isValid (base name: "IsValid")', function() {
      // uncomment below and update the code to test the property isValid
      //var instane = new ChronoSheetsApi.CSTimeSlot();
      //expect(instance).to.be();
    });

  });

}));