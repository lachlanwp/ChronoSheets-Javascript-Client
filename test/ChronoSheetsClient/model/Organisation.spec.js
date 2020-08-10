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
    instance = new ChronoSheetsApi.Organisation();
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

  describe('Organisation', function() {
    it('should create an instance of Organisation', function() {
      // uncomment below and update the code to test Organisation
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be.a(ChronoSheetsApi.Organisation);
    });

    it('should have the property id (base name: "Id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property addressLine01 (base name: "AddressLine01")', function() {
      // uncomment below and update the code to test the property addressLine01
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property addressLine02 (base name: "AddressLine02")', function() {
      // uncomment below and update the code to test the property addressLine02
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property suburb (base name: "Suburb")', function() {
      // uncomment below and update the code to test the property suburb
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "State")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property postcode (base name: "Postcode")', function() {
      // uncomment below and update the code to test the property postcode
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "Phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "Timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionCustomerId (base name: "SubscriptionCustomerId")', function() {
      // uncomment below and update the code to test the property subscriptionCustomerId
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property signupToken (base name: "SignupToken")', function() {
      // uncomment below and update the code to test the property signupToken
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "IsActive")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property stripeCouponCode (base name: "StripeCouponCode")', function() {
      // uncomment below and update the code to test the property stripeCouponCode
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionSource (base name: "SubscriptionSource")', function() {
      // uncomment below and update the code to test the property subscriptionSource
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property signUpSource (base name: "SignUpSource")', function() {
      // uncomment below and update the code to test the property signUpSource
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property mobileSignUpCode (base name: "MobileSignUpCode")', function() {
      // uncomment below and update the code to test the property mobileSignUpCode
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionCycleStart (base name: "SubscriptionCycleStart")', function() {
      // uncomment below and update the code to test the property subscriptionCycleStart
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionCycleEnd (base name: "SubscriptionCycleEnd")', function() {
      // uncomment below and update the code to test the property subscriptionCycleEnd
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

    it('should have the property pricingPlans (base name: "PricingPlans")', function() {
      // uncomment below and update the code to test the property pricingPlans
      //var instane = new ChronoSheetsApi.Organisation();
      //expect(instance).to.be();
    });

  });

}));