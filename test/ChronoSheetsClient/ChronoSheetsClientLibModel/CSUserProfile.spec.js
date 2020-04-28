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
    describe('CSUserProfile', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSUserProfile();
      });

      it('should create an instance of CSUserProfile', function() {
        // TODO: update the code to test CSUserProfile
        expect(instance).to.be.a(ChronoSheetsApi.CSUserProfile);
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

      it('should have the property userName (base name: "UserName")', function() {
        // TODO: update the code to test the property userName
        expect(instance).to.have.property('userName');
        // expect(instance.userName).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "FirstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "LastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property emailAddress (base name: "EmailAddress")', function() {
        // TODO: update the code to test the property emailAddress
        expect(instance).to.have.property('emailAddress');
        // expect(instance.emailAddress).to.be(expectedValueLiteral);
      });

      it('should have the property isSubscribedToNewsletter (base name: "IsSubscribedToNewsletter")', function() {
        // TODO: update the code to test the property isSubscribedToNewsletter
        expect(instance).to.have.property('isSubscribedToNewsletter');
        // expect(instance.isSubscribedToNewsletter).to.be(expectedValueLiteral);
      });

      it('should have the property roles (base name: "Roles")', function() {
        // TODO: update the code to test the property roles
        expect(instance).to.have.property('roles');
        // expect(instance.roles).to.be(expectedValueLiteral);
      });

      it('should have the property alertSettings (base name: "AlertSettings")', function() {
        // TODO: update the code to test the property alertSettings
        expect(instance).to.have.property('alertSettings');
        // expect(instance.alertSettings).to.be(expectedValueLiteral);
      });

      it('should have the property organisationName (base name: "OrganisationName")', function() {
        // TODO: update the code to test the property organisationName
        expect(instance).to.have.property('organisationName');
        // expect(instance.organisationName).to.be(expectedValueLiteral);
      });

      it('should have the property organisationSuburb (base name: "OrganisationSuburb")', function() {
        // TODO: update the code to test the property organisationSuburb
        expect(instance).to.have.property('organisationSuburb');
        // expect(instance.organisationSuburb).to.be(expectedValueLiteral);
      });

      it('should have the property organisationCountry (base name: "OrganisationCountry")', function() {
        // TODO: update the code to test the property organisationCountry
        expect(instance).to.have.property('organisationCountry');
        // expect(instance.organisationCountry).to.be(expectedValueLiteral);
      });

    });
  });

}));
