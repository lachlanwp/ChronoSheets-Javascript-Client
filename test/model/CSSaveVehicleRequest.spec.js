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
    instance = new TheChronoSheetsApi.CSSaveVehicleRequest();
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

  describe('CSSaveVehicleRequest', function() {
    it('should create an instance of CSSaveVehicleRequest', function() {
      // uncomment below and update the code to test CSSaveVehicleRequest
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be.a(TheChronoSheetsApi.CSSaveVehicleRequest);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property costPerKilometer (base name: "CostPerKilometer")', function() {
      // uncomment below and update the code to test the property costPerKilometer
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property make (base name: "Make")', function() {
      // uncomment below and update the code to test the property make
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "Model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "Year")', function() {
      // uncomment below and update the code to test the property year
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property licencePlateNumber (base name: "LicencePlateNumber")', function() {
      // uncomment below and update the code to test the property licencePlateNumber
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property linkedOrgGroupIds (base name: "LinkedOrgGroupIds")', function() {
      // uncomment below and update the code to test the property linkedOrgGroupIds
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

    it('should have the property isDeleted (base name: "IsDeleted")', function() {
      // uncomment below and update the code to test the property isDeleted
      //var instane = new TheChronoSheetsApi.CSSaveVehicleRequest();
      //expect(instance).to.be();
    });

  });

}));
