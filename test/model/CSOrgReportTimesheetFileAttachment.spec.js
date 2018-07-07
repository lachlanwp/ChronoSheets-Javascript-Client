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
    instance = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
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

  describe('CSOrgReportTimesheetFileAttachment', function() {
    it('should create an instance of CSOrgReportTimesheetFileAttachment', function() {
      // uncomment below and update the code to test CSOrgReportTimesheetFileAttachment
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be.a(TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment);
    });

    it('should have the property username (base name: "Username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property emailAddress (base name: "EmailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property timesheetStart (base name: "TimesheetStart")', function() {
      // uncomment below and update the code to test the property timesheetStart
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property timesheetEnd (base name: "TimesheetEnd")', function() {
      // uncomment below and update the code to test the property timesheetEnd
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property timesheetId (base name: "TimesheetId")', function() {
      // uncomment below and update the code to test the property timesheetId
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property documentS3SignedUrl (base name: "DocumentS3SignedUrl")', function() {
      // uncomment below and update the code to test the property documentS3SignedUrl
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property imageLargeS3SignedUrl (base name: "ImageLargeS3SignedUrl")', function() {
      // uncomment below and update the code to test the property imageLargeS3SignedUrl
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property imageMediumS3SignedUrl (base name: "ImageMediumS3SignedUrl")', function() {
      // uncomment below and update the code to test the property imageMediumS3SignedUrl
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property imageSmallS3SignedUrl (base name: "ImageSmallS3SignedUrl")', function() {
      // uncomment below and update the code to test the property imageSmallS3SignedUrl
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property fileAttachmentId (base name: "FileAttachmentId")', function() {
      // uncomment below and update the code to test the property fileAttachmentId
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "UserId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property orgId (base name: "OrgId")', function() {
      // uncomment below and update the code to test the property orgId
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property mobilePlatform (base name: "MobilePlatform")', function() {
      // uncomment below and update the code to test the property mobilePlatform
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property attachmentType (base name: "AttachmentType")', function() {
      // uncomment below and update the code to test the property attachmentType
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property nonImageFilePath (base name: "NonImageFilePath")', function() {
      // uncomment below and update the code to test the property nonImageFilePath
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property imageLargeFilePath (base name: "ImageLargeFilePath")', function() {
      // uncomment below and update the code to test the property imageLargeFilePath
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property imageMediumFilePath (base name: "ImageMediumFilePath")', function() {
      // uncomment below and update the code to test the property imageMediumFilePath
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property imageSmallFilePath (base name: "ImageSmallFilePath")', function() {
      // uncomment below and update the code to test the property imageSmallFilePath
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property originalFileName (base name: "OriginalFileName")', function() {
      // uncomment below and update the code to test the property originalFileName
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "Latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "Longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property dateUploaded (base name: "DateUploaded")', function() {
      // uncomment below and update the code to test the property dateUploaded
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property dateImageCaptured (base name: "DateImageCaptured")', function() {
      // uncomment below and update the code to test the property dateImageCaptured
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

    it('should have the property storageAllocationBytes (base name: "StorageAllocationBytes")', function() {
      // uncomment below and update the code to test the property storageAllocationBytes
      //var instane = new TheChronoSheetsApi.CSOrgReportTimesheetFileAttachment();
      //expect(instance).to.be();
    });

  });

}));
