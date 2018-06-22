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
    instance = new ChronoSheetsApi.OrganisationGroupsApi();
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

  describe('OrganisationGroupsApi', function() {
    describe('organisationGroupsCreateOrganisationGroup', function() {
      it('should call organisationGroupsCreateOrganisationGroup successfully', function(done) {
        //uncomment below and update the code to test organisationGroupsCreateOrganisationGroup
        //instance.organisationGroupsCreateOrganisationGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organisationGroupsGetOrganisationGroup', function() {
      it('should call organisationGroupsGetOrganisationGroup successfully', function(done) {
        //uncomment below and update the code to test organisationGroupsGetOrganisationGroup
        //instance.organisationGroupsGetOrganisationGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organisationGroupsGetOrganisationGroups', function() {
      it('should call organisationGroupsGetOrganisationGroups successfully', function(done) {
        //uncomment below and update the code to test organisationGroupsGetOrganisationGroups
        //instance.organisationGroupsGetOrganisationGroups(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organisationGroupsGetOrganisationGroupsForJob', function() {
      it('should call organisationGroupsGetOrganisationGroupsForJob successfully', function(done) {
        //uncomment below and update the code to test organisationGroupsGetOrganisationGroupsForJob
        //instance.organisationGroupsGetOrganisationGroupsForJob(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organisationGroupsGetOrganisationGroupsForVehicle', function() {
      it('should call organisationGroupsGetOrganisationGroupsForVehicle successfully', function(done) {
        //uncomment below and update the code to test organisationGroupsGetOrganisationGroupsForVehicle
        //instance.organisationGroupsGetOrganisationGroupsForVehicle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organisationGroupsUpdateOrganisationGroup', function() {
      it('should call organisationGroupsUpdateOrganisationGroup successfully', function(done) {
        //uncomment below and update the code to test organisationGroupsUpdateOrganisationGroup
        //instance.organisationGroupsUpdateOrganisationGroup(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
