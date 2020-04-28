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
    describe('CSClientTotalsReportItem', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSClientTotalsReportItem();
      });

      it('should create an instance of CSClientTotalsReportItem', function() {
        // TODO: update the code to test CSClientTotalsReportItem
        expect(instance).to.be.a(ChronoSheetsApi.CSClientTotalsReportItem);
      });

      it('should have the property organisationId (base name: "OrganisationId")', function() {
        // TODO: update the code to test the property organisationId
        expect(instance).to.have.property('organisationId');
        // expect(instance.organisationId).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "UserId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "ClientId")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property clientName (base name: "ClientName")', function() {
        // TODO: update the code to test the property clientName
        expect(instance).to.have.property('clientName');
        // expect(instance.clientName).to.be(expectedValueLiteral);
      });

      it('should have the property spanSeconds (base name: "SpanSeconds")', function() {
        // TODO: update the code to test the property spanSeconds
        expect(instance).to.have.property('spanSeconds');
        // expect(instance.spanSeconds).to.be(expectedValueLiteral);
      });

    });
  });

}));
