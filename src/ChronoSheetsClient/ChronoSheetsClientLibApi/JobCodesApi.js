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
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseJobCode', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListJobCode', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertJobCodeRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateJobCodeRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CsApiApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CsApiApiResponseInt32'), require('../ChronoSheetsClientLibModel/CsApiApiResponseJobCode'), require('../ChronoSheetsClientLibModel/CsApiApiResponseListJobCode'), require('../ChronoSheetsClientLibModel/CsApiInsertJobCodeRequest'), require('../ChronoSheetsClientLibModel/CsApiUpdateJobCodeRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.JobCodesApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiApiResponseBoolean, root.ChronoSheetsApi.CsApiApiResponseInt32, root.ChronoSheetsApi.CsApiApiResponseJobCode, root.ChronoSheetsApi.CsApiApiResponseListJobCode, root.ChronoSheetsApi.CsApiInsertJobCodeRequest, root.ChronoSheetsApi.CsApiUpdateJobCodeRequest);
  }
}(this, function(ApiClient, CsApiApiResponseBoolean, CsApiApiResponseInt32, CsApiApiResponseJobCode, CsApiApiResponseListJobCode, CsApiInsertJobCodeRequest, CsApiUpdateJobCodeRequest) {
  'use strict';

  /**
   * JobCodes service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi
   * @version v1
   */

  /**
   * Constructs a new JobCodesApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the jobCodesCreateJobCode operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesCreateJobCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a job code
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertJobCodeRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesCreateJobCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32}
     */
    this.jobCodesCreateJobCode = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling jobCodesCreateJobCode");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling jobCodesCreateJobCode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CsApiApiResponseInt32;

      return this.apiClient.callApi(
        '/api/JobCodes/CreateJobCode', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobCodesDeleteJobCode operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesDeleteJobCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a job code
     * @param {Number} jobCodeId The ID of the job code your want to delete
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesDeleteJobCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean}
     */
    this.jobCodesDeleteJobCode = function(jobCodeId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'jobCodeId' is set
      if (jobCodeId === undefined || jobCodeId === null) {
        throw new Error("Missing the required parameter 'jobCodeId' when calling jobCodesDeleteJobCode");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling jobCodesDeleteJobCode");
      }


      var pathParams = {
      };
      var queryParams = {
        'JobCodeId': jobCodeId,
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
      var returnType = CsApiApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/JobCodes/DeleteJobCode', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobCodesGetJobCodeById operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesGetJobCodeByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseJobCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a particular job code by job code id
     * @param {Number} jobCodeId 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesGetJobCodeByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseJobCode}
     */
    this.jobCodesGetJobCodeById = function(jobCodeId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'jobCodeId' is set
      if (jobCodeId === undefined || jobCodeId === null) {
        throw new Error("Missing the required parameter 'jobCodeId' when calling jobCodesGetJobCodeById");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling jobCodesGetJobCodeById");
      }


      var pathParams = {
      };
      var queryParams = {
        'JobCodeId': jobCodeId,
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
      var returnType = CsApiApiResponseJobCode;

      return this.apiClient.callApi(
        '/api/JobCodes/GetJobCodeById', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobCodesGetJobCodes operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesGetJobCodesCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListJobCode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get job codes for your organisation
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesGetJobCodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListJobCode}
     */
    this.jobCodesGetJobCodes = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling jobCodesGetJobCodes");
      }


      var pathParams = {
      };
      var queryParams = {
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
      var returnType = CsApiApiResponseListJobCode;

      return this.apiClient.callApi(
        '/api/JobCodes/GetJobCodes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the jobCodesUpdateJobCode operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesUpdateJobCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a job code
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateJobCodeRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/JobCodesApi~jobCodesUpdateJobCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean}
     */
    this.jobCodesUpdateJobCode = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling jobCodesUpdateJobCode");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling jobCodesUpdateJobCode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'x-chronosheets-auth': xChronosheetsAuth
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CsApiApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/JobCodes/UpdateJobCode', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
