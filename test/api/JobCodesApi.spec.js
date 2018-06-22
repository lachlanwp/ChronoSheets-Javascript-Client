/**
 * ChronoSheets API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    instance = new ChronoSheetsApi.JobCodesApi();
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

  describe('JobCodesApi', function() {
    describe('jobCodesCreateJobCode', function() {
      it('should call jobCodesCreateJobCode successfully', function(done) {
        //uncomment below and update the code to test jobCodesCreateJobCode
        //instance.jobCodesCreateJobCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jobCodesDeleteJobCode', function() {
      it('should call jobCodesDeleteJobCode successfully', function(done) {
        //uncomment below and update the code to test jobCodesDeleteJobCode
        //instance.jobCodesDeleteJobCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jobCodesGetJobCodeById', function() {
      it('should call jobCodesGetJobCodeById successfully', function(done) {
        //uncomment below and update the code to test jobCodesGetJobCodeById
        //instance.jobCodesGetJobCodeById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jobCodesGetJobCodes', function() {
      it('should call jobCodesGetJobCodes successfully', function(done) {
        //uncomment below and update the code to test jobCodesGetJobCodes
        //instance.jobCodesGetJobCodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jobCodesUpdateJobCode', function() {
      it('should call jobCodesUpdateJobCode successfully', function(done) {
        //uncomment below and update the code to test jobCodesUpdateJobCode
        //instance.jobCodesUpdateJobCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
