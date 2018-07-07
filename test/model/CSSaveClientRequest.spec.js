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
    instance = new TheChronoSheetsApi.CSSaveClientRequest();
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

  describe('CSSaveClientRequest', function() {
    it('should create an instance of CSSaveClientRequest', function() {
      // uncomment below and update the code to test CSSaveClientRequest
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be.a(TheChronoSheetsApi.CSSaveClientRequest);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "ClientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientAddressLine1 (base name: "ClientAddressLine1")', function() {
      // uncomment below and update the code to test the property clientAddressLine1
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientAddressLine2 (base name: "ClientAddressLine2")', function() {
      // uncomment below and update the code to test the property clientAddressLine2
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientSuburb (base name: "ClientSuburb")', function() {
      // uncomment below and update the code to test the property clientSuburb
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientState (base name: "ClientState")', function() {
      // uncomment below and update the code to test the property clientState
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientPostCode (base name: "ClientPostCode")', function() {
      // uncomment below and update the code to test the property clientPostCode
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property personOfContact (base name: "PersonOfContact")', function() {
      // uncomment below and update the code to test the property personOfContact
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientPhoneNumber (base name: "ClientPhoneNumber")', function() {
      // uncomment below and update the code to test the property clientPhoneNumber
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientMobileNumber (base name: "ClientMobileNumber")', function() {
      // uncomment below and update the code to test the property clientMobileNumber
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientEmailAddress (base name: "ClientEmailAddress")', function() {
      // uncomment below and update the code to test the property clientEmailAddress
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

    it('should have the property clientWebURL (base name: "ClientWebURL")', function() {
      // uncomment below and update the code to test the property clientWebURL
      //var instane = new TheChronoSheetsApi.CSSaveClientRequest();
      //expect(instance).to.be();
    });

  });

}));
