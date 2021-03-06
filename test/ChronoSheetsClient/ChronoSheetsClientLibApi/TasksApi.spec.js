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

  beforeEach(function() {
    instance = new ChronoSheetsApi.TasksApi();
  });

  describe('ChronoSheetsClient', function() {
    describe('TasksApi', function() {
      describe('tasksCreateTask', function() {
        it('should call tasksCreateTask successfully', function(done) {
          // TODO: uncomment, update parameter values for tasksCreateTask call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSInsertTaskRequest();
          request.taskName = "";
          request.tripEnabled = false;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.tasksCreateTask(request, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseInt32);
            expect(data.data).to.be.a('number');
            expect(data.data).to.be(0);
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
      describe('tasksDeleteTask', function() {
        it('should call tasksDeleteTask successfully', function(done) {
          // TODO: uncomment, update parameter values for tasksDeleteTask call and complete the assertions
          /*
          var taskId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.tasksDeleteTask(taskId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseBoolean);
            expect(data.data).to.be.a('boolean');
            expect(data.data).to.be(false);
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
      describe('tasksGetTaskById', function() {
        it('should call tasksGetTaskById successfully', function(done) {
          // TODO: uncomment, update parameter values for tasksGetTaskById call and complete the assertions
          /*
          var taskId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.tasksGetTaskById(taskId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseTimesheetTask);
            expect(data.data).to.be.a(ChronoSheetsApi.CSTimesheetTask);
                  expect(data.data.id).to.be.a('number');
              expect(data.data.id).to.be(0);
              expect(data.data.taskName).to.be.a('string');
              expect(data.data.taskName).to.be("");
              expect(data.data.organisationId).to.be.a('number');
              expect(data.data.organisationId).to.be(0);
              expect(data.data.isDeleted).to.be.a('boolean');
              expect(data.data.isDeleted).to.be(false);
              expect(data.data.tripEnabled).to.be.a('boolean');
              expect(data.data.tripEnabled).to.be(false);
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
      describe('tasksGetTasks', function() {
        it('should call tasksGetTasks successfully', function(done) {
          // TODO: uncomment, update parameter values for tasksGetTasks call and complete the assertions
          /*
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.tasksGetTasks(xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseListTimesheetTask);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSTimesheetTask);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.taskName).to.be.a('string');
                expect(data.taskName).to.be("");
                expect(data.organisationId).to.be.a('number');
                expect(data.organisationId).to.be(0);
                expect(data.isDeleted).to.be.a('boolean');
                expect(data.isDeleted).to.be(false);
                expect(data.tripEnabled).to.be.a('boolean');
                expect(data.tripEnabled).to.be(false);

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
      describe('tasksGetTasksForJob', function() {
        it('should call tasksGetTasksForJob successfully', function(done) {
          // TODO: uncomment, update parameter values for tasksGetTasksForJob call and complete the assertions
          /*
          var jobId = 56;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.tasksGetTasksForJob(jobId, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseListTimesheetTask);
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(ChronoSheetsApi.CSTimesheetTask);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.taskName).to.be.a('string');
                expect(data.taskName).to.be("");
                expect(data.organisationId).to.be.a('number');
                expect(data.organisationId).to.be(0);
                expect(data.isDeleted).to.be.a('boolean');
                expect(data.isDeleted).to.be(false);
                expect(data.tripEnabled).to.be.a('boolean');
                expect(data.tripEnabled).to.be(false);

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
      describe('tasksUpdateTask', function() {
        it('should call tasksUpdateTask successfully', function(done) {
          // TODO: uncomment, update parameter values for tasksUpdateTask call and complete the assertions
          /*
          var request = new ChronoSheetsApi.CSUpdateTaskRequest();
          request.id = 0;
          request.taskName = "";
          request.isDeleted = false;
          request.tripEnabled = false;
          var xChronosheetsAuth = "xChronosheetsAuth_example";

          instance.tasksUpdateTask(request, xChronosheetsAuth, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ChronoSheetsApi.CSApiResponseBoolean);
            expect(data.data).to.be.a('boolean');
            expect(data.data).to.be(false);
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
