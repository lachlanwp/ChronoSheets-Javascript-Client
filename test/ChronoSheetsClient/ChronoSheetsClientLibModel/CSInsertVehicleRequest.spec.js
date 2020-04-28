/*
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../../src/ChronoSheetsClient/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../../src/ChronoSheetsClient/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ChronoSheetsApi);
  }
}(this, function(expect, ChronoSheetsApi) {
  'use strict';

  var instance;

  describe('ChronoSheetsClient', function() {
    describe('CSInsertVehicleRequest', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSInsertVehicleRequest();
      });

      it('should create an instance of CSInsertVehicleRequest', function() {
        // TODO: update the code to test CSInsertVehicleRequest
        expect(instance).to.be.a(ChronoSheetsApi.CSInsertVehicleRequest);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property costPerKilometer (base name: "CostPerKilometer")', function() {
        // TODO: update the code to test the property costPerKilometer
        expect(instance).to.have.property('costPerKilometer');
        // expect(instance.costPerKilometer).to.be(expectedValueLiteral);
      });

      it('should have the property make (base name: "Make")', function() {
        // TODO: update the code to test the property make
        expect(instance).to.have.property('make');
        // expect(instance.make).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "Model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property year (base name: "Year")', function() {
        // TODO: update the code to test the property year
        expect(instance).to.have.property('year');
        // expect(instance.year).to.be(expectedValueLiteral);
      });

      it('should have the property licencePlateNumber (base name: "LicencePlateNumber")', function() {
        // TODO: update the code to test the property licencePlateNumber
        expect(instance).to.have.property('licencePlateNumber');
        // expect(instance.licencePlateNumber).to.be(expectedValueLiteral);
      });

      it('should have the property linkedOrgGroupIds (base name: "LinkedOrgGroupIds")', function() {
        // TODO: update the code to test the property linkedOrgGroupIds
        expect(instance).to.have.property('linkedOrgGroupIds');
        // expect(instance.linkedOrgGroupIds).to.be(expectedValueLiteral);
      });

    });
  });

}));
