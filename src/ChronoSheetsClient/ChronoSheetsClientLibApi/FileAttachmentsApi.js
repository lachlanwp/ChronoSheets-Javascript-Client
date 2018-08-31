/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
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
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTimesheetFileAttachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTimesheetFileAttachment'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.FileAttachmentsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseBoolean, root.ChronoSheetsApi.CSApiResponseForPaginatedListTimesheetFileAttachment);
  }
}(this, function(ApiClient, CSApiResponseBoolean, CSApiResponseForPaginatedListTimesheetFileAttachment) {
  'use strict';

  /**
   * FileAttachments service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/FileAttachmentsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FileAttachmentsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/FileAttachmentsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the fileAttachmentsDeleteTimesheetFileAttachment operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/FileAttachmentsApi~fileAttachmentsDeleteTimesheetFileAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a particular timesheet file attachment
     * @param {Number} fileAttachmentId The Id of the file attachment to delete
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/FileAttachmentsApi~fileAttachmentsDeleteTimesheetFileAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.fileAttachmentsDeleteTimesheetFileAttachment = function(fileAttachmentId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'fileAttachmentId' is set
      if (fileAttachmentId === undefined || fileAttachmentId === null) {
        throw new Error("Missing the required parameter 'fileAttachmentId' when calling fileAttachmentsDeleteTimesheetFileAttachment");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling fileAttachmentsDeleteTimesheetFileAttachment");
      }


      var pathParams = {
      };
      var queryParams = {
        'FileAttachmentId': fileAttachmentId,
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
      var returnType = CSApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/FileAttachments/DeleteTimesheetFileAttachment', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the fileAttachmentsGetMyFileAttachments operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/FileAttachmentsApi~fileAttachmentsGetMyFileAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTimesheetFileAttachment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get my file attachments.  Get files you&#39;ve attached to timesheets.
     * @param {Date} startDate The Start date of the date range.  File attachments after this date will be obtained.
     * @param {Date} endDate The End date of the date range.  File attachments before this date will be obtained.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Skip this many File attachments
     * @param {Number} opts.take Take this many File attachments
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/FileAttachmentsApi~fileAttachmentsGetMyFileAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseForPaginatedListTimesheetFileAttachment}
     */
    this.fileAttachmentsGetMyFileAttachments = function(startDate, endDate, xChronosheetsAuth, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling fileAttachmentsGetMyFileAttachments");
      }

      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling fileAttachmentsGetMyFileAttachments");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling fileAttachmentsGetMyFileAttachments");
      }


      var pathParams = {
      };
      var queryParams = {
        'StartDate': startDate,
        'EndDate': endDate,
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
      var returnType = CSApiResponseForPaginatedListTimesheetFileAttachment;

      return this.apiClient.callApi(
        '/api/FileAttachments/GetMyFileAttachments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
