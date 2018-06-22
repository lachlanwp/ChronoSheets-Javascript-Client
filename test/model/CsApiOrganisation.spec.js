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
    instance = new ChronoSheetsApi.CsApiOrganisation();
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

  describe('CsApiOrganisation', function() {
    it('should create an instance of CsApiOrganisation', function() {
      // uncomment below and update the code to test CsApiOrganisation
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be.a(ChronoSheetsApi.CsApiOrganisation);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property addressLine01 (base name: "AddressLine01")', function() {
      // uncomment below and update the code to test the property addressLine01
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property addressLine02 (base name: "AddressLine02")', function() {
      // uncomment below and update the code to test the property addressLine02
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property suburb (base name: "Suburb")', function() {
      // uncomment below and update the code to test the property suburb
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "State")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property postcode (base name: "Postcode")', function() {
      // uncomment below and update the code to test the property postcode
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "Phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "Timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionCustomerId (base name: "SubscriptionCustomerId")', function() {
      // uncomment below and update the code to test the property subscriptionCustomerId
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionPlanId (base name: "SubscriptionPlanId")', function() {
      // uncomment below and update the code to test the property subscriptionPlanId
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property signupToken (base name: "SignupToken")', function() {
      // uncomment below and update the code to test the property signupToken
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

    it('should have the property numberSeatsAvailable (base name: "NumberSeatsAvailable")', function() {
      // uncomment below and update the code to test the property numberSeatsAvailable
      //var instane = new ChronoSheetsApi.CsApiOrganisation();
      //expect(instance).to.be();
    });

  });

}));
