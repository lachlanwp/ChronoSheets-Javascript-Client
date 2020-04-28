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
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTranscript', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListFleetSummaryReportItem', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTranscript'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem'), require('../ChronoSheetsClientLibModel/CSApiResponseListFleetSummaryReportItem'), require('../ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem'), require('../ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem'), require('../ChronoSheetsClientLibModel/CSApiResponseTrip'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.ReportsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseCombinedReportsData, root.ChronoSheetsApi.CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment, root.ChronoSheetsApi.CSApiResponseForPaginatedListOrgReportTranscript, root.ChronoSheetsApi.CSApiResponseForPaginatedListOrgReportTrip, root.ChronoSheetsApi.CSApiResponseForPaginatedListRawReportItem, root.ChronoSheetsApi.CSApiResponseListFleetSummaryReportItem, root.ChronoSheetsApi.CSApiResponseListJobSeriesReportItem, root.ChronoSheetsApi.CSApiResponseListProjectCostingReportItem, root.ChronoSheetsApi.CSApiResponseTrip);
  }
}(this, function(ApiClient, CSApiResponseCombinedReportsData, CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment, CSApiResponseForPaginatedListOrgReportTranscript, CSApiResponseForPaginatedListOrgReportTrip, CSApiResponseForPaginatedListRawReportItem, CSApiResponseListFleetSummaryReportItem, CSApiResponseListJobSeriesReportItem, CSApiResponseListProjectCostingReportItem, CSApiResponseTrip) {
  'use strict';

  /**
   * Reports service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ReportsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the reportsGetAllChartsDataAdmin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Consolidated Admin Reports Data (Jobs, Tasks, Clients and Projects).  These are the organisation wide reports, with data from potentially all employees.    Requires the 'ReportAdmin' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {String} opts.userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/String} opts.forceOnlyThisChart A flag to indicate which report data you require.  Choose a particular set of data, or if you want all data use the 'NotForced' option.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData}
     */
    this.reportsGetAllChartsDataAdmin = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetAllChartsDataAdmin");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetAllChartsDataAdmin");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetAllChartsDataAdmin");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'UserIds': opts['userIds'],
        'ForceOnlyThisChart': opts['forceOnlyThisChart'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseCombinedReportsData;

      return this.apiClient.callApi(
        '/api/Reports/GetAllChartsDataAdmin', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetAllChartsDataUser operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataUserCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Consolidated User Reports Data (Jobs, Tasks, Clients and Projects).  These are the user's own reports.    Requires the 'ViewOwnReports' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetAllChartsDataUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseCombinedReportsData}
     */
    this.reportsGetAllChartsDataUser = function(startDate, endDate, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetAllChartsDataUser");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetAllChartsDataUser");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetAllChartsDataUser");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseCombinedReportsData;

      return this.apiClient.callApi(
        '/api/Reports/GetAllChartsDataUser', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetFleetSummaryAdmin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetFleetSummaryAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListFleetSummaryReportItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a summary report, which includes total distance travelled and total running costs, for vehicles within your organisation  Requires the 'ReportAdmin' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {String} opts.userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetFleetSummaryAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListFleetSummaryReportItem}
     */
    this.reportsGetFleetSummaryAdmin = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetFleetSummaryAdmin");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetFleetSummaryAdmin");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetFleetSummaryAdmin");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'UserIds': opts['userIds'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseListFleetSummaryReportItem;

      return this.apiClient.callApi(
        '/api/Reports/GetFleetSummaryAdmin', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetOrgTripById operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrgTripByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get trip by Id, for reporting purposes.    Requires the 'ReportAdmin' permission.
     * @param {Number} tripId The ID of the Trip you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrgTripByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseTrip}
     */
    this.reportsGetOrgTripById = function(tripId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'tripId' is set
      if (tripId === undefined || tripId === null) {
        throw new Error("Missing the required parameter 'tripId' when calling reportsGetOrgTripById");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetOrgTripById");
      }


      var pathParams = {
      };
      var queryParams = {
        'TripId': tripId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseTrip;

      return this.apiClient.callApi(
        '/api/Reports/GetOrgTripById', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetOrganisationTimesheetFileAttachments operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTimesheetFileAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reports on Organisation timesheet file attachments (files uploaded and attached to timesheet records)  Requires the 'ReportAdmin' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Skip this many items
     * @param {Number} opts.take Take this many items
     * @param {String} opts.userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTimesheetFileAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment}
     */
    this.reportsGetOrganisationTimesheetFileAttachments = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetOrganisationTimesheetFileAttachments");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetOrganisationTimesheetFileAttachments");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetOrganisationTimesheetFileAttachments");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'Skip': opts['skip'],
        'Take': opts['take'],
        'UserIds': opts['userIds'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseForPaginatedListOrgReportTimesheetFileAttachment;

      return this.apiClient.callApi(
        '/api/Reports/GetOrganisationTimesheetFileAttachments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetOrganisationTranscripts operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTranscriptsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTranscript} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reports on Organisation transcripts (When an audio file is attached, it will be automatically transcribed, these are the transcriptions)    Requires the 'ReportAdmin' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Skip this many items
     * @param {Number} opts.take Take this many items
     * @param {String} opts.userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {String} opts.keywords Search the transcripts by keyword(s)
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTranscriptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTranscript}
     */
    this.reportsGetOrganisationTranscripts = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetOrganisationTranscripts");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetOrganisationTranscripts");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetOrganisationTranscripts");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'Skip': opts['skip'],
        'Take': opts['take'],
        'UserIds': opts['userIds'],
        'Keywords': opts['keywords'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseForPaginatedListOrgReportTranscript;

      return this.apiClient.callApi(
        '/api/Reports/GetOrganisationTranscripts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetOrganisationTrips operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTripsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reports on Organisation trips (GPS tracking from whole organisation).    Requires the 'ReportAdmin' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Skip this many items
     * @param {Number} opts.take Take this many items
     * @param {String} opts.userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetOrganisationTripsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListOrgReportTrip}
     */
    this.reportsGetOrganisationTrips = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetOrganisationTrips");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetOrganisationTrips");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetOrganisationTrips");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'Skip': opts['skip'],
        'Take': opts['take'],
        'UserIds': opts['userIds'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseForPaginatedListOrgReportTrip;

      return this.apiClient.callApi(
        '/api/Reports/GetOrganisationTrips', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGetRawDataAdmin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetRawDataAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Timesheets Raw Data.  This data details each timesheet record.  These are the organisation wide timesheet records, with data from potentially all employees.    Requires the 'ReportAdmin' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {String} opts.userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/String} opts.sort Decide which column to sort on
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/String} opts.order Decide which direction to sort the column
     * @param {Number} opts.skip Skip this many rows
     * @param {Number} opts.take Take this many rows
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsGetRawDataAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListRawReportItem}
     */
    this.reportsGetRawDataAdmin = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsGetRawDataAdmin");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsGetRawDataAdmin");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'UserIds': opts['userIds'],
        'Sort': opts['sort'],
        'Order': opts['order'],
        'Skip': opts['skip'],
        'Take': opts['take'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseForPaginatedListRawReportItem;

      return this.apiClient.callApi(
        '/api/Reports/GetRawDataAdmin', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsProjectCostingsAdmin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsProjectCostingsAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets project cost estimations VS actual cost for date range and users.    Requires the 'ReportAdmin' permission.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {String} opts.userIds A comma-separated list of user Ids, if you want to filter the report data to particular users.  If you want all, send a blank string.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsProjectCostingsAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem}
     */
    this.reportsProjectCostingsAdmin = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsProjectCostingsAdmin");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsProjectCostingsAdmin");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsProjectCostingsAdmin");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
        'UserIds': opts['userIds'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseListProjectCostingReportItem;

      return this.apiClient.callApi(
        '/api/Reports/ProjectCostingsAdmin', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsUserJobsOverTime operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsUserJobsOverTimeCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Timeseries jobs data for the logged in user.    Requires the 'ViewOwnReports' or 'SubmitTimesheets'.
     * @param {Date} startDate The start date for the date range.  Report data in the response is after this date
     * @param {Date} endDate The end date for the date range.  Report data in the response is before this date
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ReportsApi~reportsUserJobsOverTimeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListJobSeriesReportItem}
     */
    this.reportsUserJobsOverTime = function(startDate, endDate, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling reportsUserJobsOverTime");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling reportsUserJobsOverTime");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling reportsUserJobsOverTime");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseListJobSeriesReportItem;

      return this.apiClient.callApi(
        '/api/Reports/UserJobsOverTime', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
