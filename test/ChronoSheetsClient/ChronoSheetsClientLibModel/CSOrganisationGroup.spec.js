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
    describe('CSOrganisationGroup', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSOrganisationGroup();
      });

      it('should create an instance of CSOrganisationGroup', function() {
        // TODO: update the code to test CSOrganisationGroup
        expect(instance).to.be.a(ChronoSheetsApi.CSOrganisationGroup);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property organisationId (base name: "OrganisationId")', function() {
        // TODO: update the code to test the property organisationId
        expect(instance).to.have.property('organisationId');
        // expect(instance.organisationId).to.be(expectedValueLiteral);
      });

      it('should have the property organisationGroupName (base name: "OrganisationGroupName")', function() {
        // TODO: update the code to test the property organisationGroupName
        expect(instance).to.have.property('organisationGroupName');
        // expect(instance.organisationGroupName).to.be(expectedValueLiteral);
      });

      it('should have the property isDeleted (base name: "IsDeleted")', function() {
        // TODO: update the code to test the property isDeleted
        expect(instance).to.have.property('isDeleted');
        // expect(instance.isDeleted).to.be(expectedValueLiteral);
      });

    });
  });

}));
