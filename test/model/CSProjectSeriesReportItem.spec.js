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
    instance = new JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem();
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

  describe('CSProjectSeriesReportItem', function() {
    it('should create an instance of CSProjectSeriesReportItem', function() {
      // uncomment below and update the code to test CSProjectSeriesReportItem
      //var instane = new JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem();
      //expect(instance).to.be.a(JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem);
    });

    it('should have the property startDate (base name: "StartDate")', function() {
      // uncomment below and update the code to test the property startDate
      //var instane = new JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem();
      //expect(instance).to.be();
    });

    it('should have the property endDate (base name: "EndDate")', function() {
      // uncomment below and update the code to test the property endDate
      //var instane = new JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "ProjectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem();
      //expect(instance).to.be();
    });

    it('should have the property projectName (base name: "ProjectName")', function() {
      // uncomment below and update the code to test the property projectName
      //var instane = new JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem();
      //expect(instance).to.be();
    });

    it('should have the property spanSeconds (base name: "SpanSeconds")', function() {
      // uncomment below and update the code to test the property spanSeconds
      //var instane = new JavascriptApiClientForChronoSheets.CSProjectSeriesReportItem();
      //expect(instance).to.be();
    });

  });

}));
