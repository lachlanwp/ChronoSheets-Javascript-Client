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
    describe('CSJobCode', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSJobCode();
      });

      it('should create an instance of CSJobCode', function() {
        // TODO: update the code to test CSJobCode
        expect(instance).to.be.a(ChronoSheetsApi.CSJobCode);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property code (base name: "Code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property client (base name: "Client")', function() {
        // TODO: update the code to test the property client
        expect(instance).to.have.property('client');
        // expect(instance.client).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "ClientId")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property project (base name: "Project")', function() {
        // TODO: update the code to test the property project
        expect(instance).to.have.property('project');
        // expect(instance.project).to.be(expectedValueLiteral);
      });

      it('should have the property projectId (base name: "ProjectId")', function() {
        // TODO: update the code to test the property projectId
        expect(instance).to.have.property('projectId');
        // expect(instance.projectId).to.be(expectedValueLiteral);
      });

      it('should have the property organisationId (base name: "OrganisationId")', function() {
        // TODO: update the code to test the property organisationId
        expect(instance).to.have.property('organisationId');
        // expect(instance.organisationId).to.be(expectedValueLiteral);
      });

      it('should have the property isDeleted (base name: "IsDeleted")', function() {
        // TODO: update the code to test the property isDeleted
        expect(instance).to.have.property('isDeleted');
        // expect(instance.isDeleted).to.be(expectedValueLiteral);
      });

    });
  });

}));
