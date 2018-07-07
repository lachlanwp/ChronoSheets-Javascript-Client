/**
 * The ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  </p>  <p>      First Steps:       <ol>          <li>Make sure you've <a href='/HomeV2/App/sign-up'>signed up to ChronoSheets</a> to get yourself a user account</li>          <li>Confirm your account by following the link sent to your email address.  This will activate your account</li>          <li>Use your username and password to obtain an Auth Token by using the DoLogin method inside the UserProfile section below.  Use the Auth Token as an argument to the other methods</li>          <li>Try different methods in the API Playground to learn about the API</li>          <li>If you're stuck, try the full getting started guide on the <a href='/Home/ApiDocs'>API Toolkit</a> page.</li>      </ol>  </p>  <p>      Further Steps:       <ul>          <li>Create a mobile app (iOS, Android or Windows) using one of the ChronoSheets Mobile SDKs</li>          <li>Create a custom integration with your app using one of the ChronoSheets API Client Libraries.</li>      </ul>      Read more about the API Toolkit on the <a href='/Home/ApiDocs'>API Toolkit</a> page.  </p></div>
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
    instance = new TheChronoSheetsApi.ReportsApi();
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

  describe('ReportsApi', function() {
    describe('reportsGetAllChartsDataAdmin', function() {
      it('should call reportsGetAllChartsDataAdmin successfully', function(done) {
        //uncomment below and update the code to test reportsGetAllChartsDataAdmin
        //instance.reportsGetAllChartsDataAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsGetAllChartsDataUser', function() {
      it('should call reportsGetAllChartsDataUser successfully', function(done) {
        //uncomment below and update the code to test reportsGetAllChartsDataUser
        //instance.reportsGetAllChartsDataUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsGetOrgTripById', function() {
      it('should call reportsGetOrgTripById successfully', function(done) {
        //uncomment below and update the code to test reportsGetOrgTripById
        //instance.reportsGetOrgTripById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsGetOrganisationTimesheetFileAttachments', function() {
      it('should call reportsGetOrganisationTimesheetFileAttachments successfully', function(done) {
        //uncomment below and update the code to test reportsGetOrganisationTimesheetFileAttachments
        //instance.reportsGetOrganisationTimesheetFileAttachments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsGetOrganisationTrips', function() {
      it('should call reportsGetOrganisationTrips successfully', function(done) {
        //uncomment below and update the code to test reportsGetOrganisationTrips
        //instance.reportsGetOrganisationTrips(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsGetRawDataAdmin', function() {
      it('should call reportsGetRawDataAdmin successfully', function(done) {
        //uncomment below and update the code to test reportsGetRawDataAdmin
        //instance.reportsGetRawDataAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsProjectCostingsAdmin', function() {
      it('should call reportsProjectCostingsAdmin successfully', function(done) {
        //uncomment below and update the code to test reportsProjectCostingsAdmin
        //instance.reportsProjectCostingsAdmin(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsUserJobsOverTime', function() {
      it('should call reportsUserJobsOverTime successfully', function(done) {
        //uncomment below and update the code to test reportsUserJobsOverTime
        //instance.reportsUserJobsOverTime(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
