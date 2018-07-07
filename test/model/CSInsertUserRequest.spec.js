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
    instance = new TheChronoSheetsApi.CSInsertUserRequest();
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

  describe('CSInsertUserRequest', function() {
    it('should create an instance of CSInsertUserRequest', function() {
      // uncomment below and update the code to test CSInsertUserRequest
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be.a(TheChronoSheetsApi.CSInsertUserRequest);
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property isSubscribedToNewsletter (base name: "IsSubscribedToNewsletter")', function() {
      // uncomment below and update the code to test the property isSubscribedToNewsletter
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property roles (base name: "Roles")', function() {
      // uncomment below and update the code to test the property roles
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property alertSettings (base name: "AlertSettings")', function() {
      // uncomment below and update the code to test the property alertSettings
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property userName (base name: "UserName")', function() {
      // uncomment below and update the code to test the property userName
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property hourlyPayRate (base name: "HourlyPayRate")', function() {
      // uncomment below and update the code to test the property hourlyPayRate
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property hourlyOvertimePayRate (base name: "HourlyOvertimePayRate")', function() {
      // uncomment below and update the code to test the property hourlyOvertimePayRate
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

    it('should have the property currentDate (base name: "CurrentDate")', function() {
      // uncomment below and update the code to test the property currentDate
      //var instane = new TheChronoSheetsApi.CSInsertUserRequest();
      //expect(instance).to.be();
    });

  });

}));
