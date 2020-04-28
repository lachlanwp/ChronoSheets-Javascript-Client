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

  beforeEach(function() {
    instance = new ChronoSheetsApi.AggregateClientProjectsApi();
  });

  describe('ChronoSheetsClient', function() {
    describe('AggregateClientProjectsApi', function() {
      describe('aggregateClientProjectsGetAggregateClientProjects', function() {
        it('should call aggregateClientProjectsGetAggregateClientProjects successfully', function(done) {
          // TODO: uncomment, update parameter values for aggregateClientProjectsGetAggregateClientProjects call and complete the assertions
          /*
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.aggregateClientProjectsGetAggregateClientProjects(xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseListAggregateClient);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSAggregateClient);
                {
                  let dataCtr = data.clientProjects;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(ChronoSheetsApi.CSAggregateProject);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.clientId).to.be.a('number');
                    expect(data.clientId).to.be(0);
                    expect(data.organisationId).to.be.a('number');
                    expect(data.organisationId).to.be(0);
                    expect(data.projectName).to.be.a('string');
                    expect(data.projectName).to.be("");
                    expect(data.costEstimation).to.be.a('number');
                    expect(data.costEstimation).to.be(0.0);
                    expect(data.startDate).to.be.a(Date);
                    expect(data.startDate).to.be(new Date());
                    expect(data.endDate).to.be.a(Date);
                    expect(data.endDate).to.be(new Date());
                  }
                }
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.organisationId).to.be.a('number');
                expect(data.organisationId).to.be(0);
                expect(data.clientName).to.be.a('string');
                expect(data.clientName).to.be("");
                expect(data.clientAddressLine1).to.be.a('string');
                expect(data.clientAddressLine1).to.be("");
                expect(data.clientAddressLine2).to.be.a('string');
                expect(data.clientAddressLine2).to.be("");
                expect(data.clientSuburb).to.be.a('string');
                expect(data.clientSuburb).to.be("");
                expect(data.clientState).to.be.a('string');
                expect(data.clientState).to.be("");
                expect(data.clientPostCode).to.be.a('string');
                expect(data.clientPostCode).to.be("");
                expect(data.personOfContact).to.be.a('string');
                expect(data.personOfContact).to.be("");
                expect(data.clientPhoneNumber).to.be.a('string');
                expect(data.clientPhoneNumber).to.be("");
                expect(data.clientMobileNumber).to.be.a('string');
                expect(data.clientMobileNumber).to.be("");
                expect(data.clientEmailAddress).to.be.a('string');
                expect(data.clientEmailAddress).to.be("");
                expect(data.clientWebURL).to.be.a('string');
                expect(data.clientWebURL).to.be("");
                expect(data.projectCount).to.be.a('number');
                expect(data.projectCount).to.be(0);
              }
            }
            expect(data.status).to.be.a('string');
            expect(data.status).to.be("Succeeded");
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
