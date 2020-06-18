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
    describe('CSExtendedGeofence', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSExtendedGeofence();
      });

      it('should create an instance of CSExtendedGeofence', function() {
        // TODO: update the code to test CSExtendedGeofence
        expect(instance).to.be.a(ChronoSheetsApi.CSExtendedGeofence);
      });

      it('should have the property jobCode (base name: "JobCode")', function() {
        // TODO: update the code to test the property jobCode
        expect(instance).to.have.property('jobCode');
        // expect(instance.jobCode).to.be(expectedValueLiteral);
      });

      it('should have the property taskName (base name: "TaskName")', function() {
        // TODO: update the code to test the property taskName
        expect(instance).to.have.property('taskName');
        // expect(instance.taskName).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "CreatedBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property updatedBy (base name: "UpdatedBy")', function() {
        // TODO: update the code to test the property updatedBy
        expect(instance).to.have.property('updatedBy');
        // expect(instance.updatedBy).to.be(expectedValueLiteral);
      });

      it('should have the property alertOrganisation (base name: "AlertOrganisation")', function() {
        // TODO: update the code to test the property alertOrganisation
        expect(instance).to.have.property('alertOrganisation');
        // expect(instance.alertOrganisation).to.be(expectedValueLiteral);
      });

      it('should have the property geoFencingId (base name: "GeoFencingId")', function() {
        // TODO: update the code to test the property geoFencingId
        expect(instance).to.have.property('geoFencingId');
        // expect(instance.geoFencingId).to.be(expectedValueLiteral);
      });

      it('should have the property orgId (base name: "OrgId")', function() {
        // TODO: update the code to test the property orgId
        expect(instance).to.have.property('orgId');
        // expect(instance.orgId).to.be(expectedValueLiteral);
      });

      it('should have the property createdByUserId (base name: "CreatedByUserId")', function() {
        // TODO: update the code to test the property createdByUserId
        expect(instance).to.have.property('createdByUserId');
        // expect(instance.createdByUserId).to.be(expectedValueLiteral);
      });

      it('should have the property lastUpdatedByUserId (base name: "LastUpdatedByUserId")', function() {
        // TODO: update the code to test the property lastUpdatedByUserId
        expect(instance).to.have.property('lastUpdatedByUserId');
        // expect(instance.lastUpdatedByUserId).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "Name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property locationName (base name: "LocationName")', function() {
        // TODO: update the code to test the property locationName
        expect(instance).to.have.property('locationName');
        // expect(instance.locationName).to.be(expectedValueLiteral);
      });

      it('should have the property coordinates (base name: "Coordinates")', function() {
        // TODO: update the code to test the property coordinates
        expect(instance).to.have.property('coordinates');
        // expect(instance.coordinates).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "CreatedAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "UpdatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property triggerJobCodeId (base name: "TriggerJobCodeId")', function() {
        // TODO: update the code to test the property triggerJobCodeId
        expect(instance).to.have.property('triggerJobCodeId');
        // expect(instance.triggerJobCodeId).to.be(expectedValueLiteral);
      });

      it('should have the property triggerTaskId (base name: "TriggerTaskId")', function() {
        // TODO: update the code to test the property triggerTaskId
        expect(instance).to.have.property('triggerTaskId');
        // expect(instance.triggerTaskId).to.be(expectedValueLiteral);
      });

      it('should have the property triggerSettings (base name: "TriggerSettings")', function() {
        // TODO: update the code to test the property triggerSettings
        expect(instance).to.have.property('triggerSettings');
        // expect(instance.triggerSettings).to.be(expectedValueLiteral);
      });

      it('should have the property alertToOrgGroupId (base name: "AlertToOrgGroupId")', function() {
        // TODO: update the code to test the property alertToOrgGroupId
        expect(instance).to.have.property('alertToOrgGroupId');
        // expect(instance.alertToOrgGroupId).to.be(expectedValueLiteral);
      });

      it('should have the property alertSettings (base name: "AlertSettings")', function() {
        // TODO: update the code to test the property alertSettings
        expect(instance).to.have.property('alertSettings');
        // expect(instance.alertSettings).to.be(expectedValueLiteral);
      });

      it('should have the property startTimeHour (base name: "StartTimeHour")', function() {
        // TODO: update the code to test the property startTimeHour
        expect(instance).to.have.property('startTimeHour');
        // expect(instance.startTimeHour).to.be(expectedValueLiteral);
      });

      it('should have the property startTimeMinute (base name: "StartTimeMinute")', function() {
        // TODO: update the code to test the property startTimeMinute
        expect(instance).to.have.property('startTimeMinute');
        // expect(instance.startTimeMinute).to.be(expectedValueLiteral);
      });

      it('should have the property endTimeHour (base name: "EndTimeHour")', function() {
        // TODO: update the code to test the property endTimeHour
        expect(instance).to.have.property('endTimeHour');
        // expect(instance.endTimeHour).to.be(expectedValueLiteral);
      });

      it('should have the property endTimeMinute (base name: "EndTimeMinute")', function() {
        // TODO: update the code to test the property endTimeMinute
        expect(instance).to.have.property('endTimeMinute');
        // expect(instance.endTimeMinute).to.be(expectedValueLiteral);
      });

    });
  });

}));
