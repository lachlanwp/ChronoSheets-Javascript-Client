/*
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    describe('CSCombinedReportsData', function() {
      beforeEach(function() {
        instance = new ChronoSheetsApi.CSCombinedReportsData();
      });

      it('should create an instance of CSCombinedReportsData', function() {
        // TODO: update the code to test CSCombinedReportsData
        expect(instance).to.be.a(ChronoSheetsApi.CSCombinedReportsData);
      });

      it('should have the property seriesJobCodes (base name: "SeriesJobCodes")', function() {
        // TODO: update the code to test the property seriesJobCodes
        expect(instance).to.have.property('seriesJobCodes');
        // expect(instance.seriesJobCodes).to.be(expectedValueLiteral);
      });

      it('should have the property seriesTasks (base name: "SeriesTasks")', function() {
        // TODO: update the code to test the property seriesTasks
        expect(instance).to.have.property('seriesTasks');
        // expect(instance.seriesTasks).to.be(expectedValueLiteral);
      });

      it('should have the property seriesClients (base name: "SeriesClients")', function() {
        // TODO: update the code to test the property seriesClients
        expect(instance).to.have.property('seriesClients');
        // expect(instance.seriesClients).to.be(expectedValueLiteral);
      });

      it('should have the property seriesProjects (base name: "SeriesProjects")', function() {
        // TODO: update the code to test the property seriesProjects
        expect(instance).to.have.property('seriesProjects');
        // expect(instance.seriesProjects).to.be(expectedValueLiteral);
      });

      it('should have the property totalsJobCodes (base name: "TotalsJobCodes")', function() {
        // TODO: update the code to test the property totalsJobCodes
        expect(instance).to.have.property('totalsJobCodes');
        // expect(instance.totalsJobCodes).to.be(expectedValueLiteral);
      });

      it('should have the property totalsTasks (base name: "TotalsTasks")', function() {
        // TODO: update the code to test the property totalsTasks
        expect(instance).to.have.property('totalsTasks');
        // expect(instance.totalsTasks).to.be(expectedValueLiteral);
      });

      it('should have the property totalsClients (base name: "TotalsClients")', function() {
        // TODO: update the code to test the property totalsClients
        expect(instance).to.have.property('totalsClients');
        // expect(instance.totalsClients).to.be(expectedValueLiteral);
      });

      it('should have the property totalsProjects (base name: "TotalsProjects")', function() {
        // TODO: update the code to test the property totalsProjects
        expect(instance).to.have.property('totalsProjects');
        // expect(instance.totalsProjects).to.be(expectedValueLiteral);
      });

    });
  });

}));
