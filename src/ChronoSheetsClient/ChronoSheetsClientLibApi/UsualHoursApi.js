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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSetUsualHoursRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CsApiApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay'), require('../ChronoSheetsClientLibModel/CsApiSetUsualHoursRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.UsualHoursApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiApiResponseBoolean, root.ChronoSheetsApi.CsApiApiResponseListUsualHoursDay, root.ChronoSheetsApi.CsApiSetUsualHoursRequest);
  }
}(this, function(ApiClient, CsApiApiResponseBoolean, CsApiApiResponseListUsualHoursDay, CsApiSetUsualHoursRequest) {
  'use strict';

  /**
   * UsualHours service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi
   * @version v1
   */

  /**
   * Constructs a new UsualHoursApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usualHoursGetUsualHours operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursGetUsualHoursCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get usual hours (rostered hours) for an employee
     * @param {Number} userId 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursGetUsualHoursCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListUsualHoursDay}
     */
    this.usualHoursGetUsualHours = function(userId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usualHoursGetUsualHours");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling usualHoursGetUsualHours");
      }


      var pathParams = {
      };
      var queryParams = {
        'UserId': userId,
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
      var returnType = CsApiApiResponseListUsualHoursDay;

      return this.apiClient.callApi(
        '/api/UsualHours/GetUsualHours', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the usualHoursSetUsualHours operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursSetUsualHoursCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set usual hours (rostered hours) for an employee
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSetUsualHoursRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UsualHoursApi~usualHoursSetUsualHoursCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean}
     */
    this.usualHoursSetUsualHours = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling usualHoursSetUsualHours");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling usualHoursSetUsualHours");
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
        '/api/UsualHours/SetUsualHours', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
