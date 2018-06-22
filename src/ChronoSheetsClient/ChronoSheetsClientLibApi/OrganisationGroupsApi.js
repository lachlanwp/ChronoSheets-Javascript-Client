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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseOrganisationGroup', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertOrganisationGroupRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSaveOrganisationGroupRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CsApiApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CsApiApiResponseInt32'), require('../ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup'), require('../ChronoSheetsClientLibModel/CsApiApiResponseOrganisationGroup'), require('../ChronoSheetsClientLibModel/CsApiInsertOrganisationGroupRequest'), require('../ChronoSheetsClientLibModel/CsApiSaveOrganisationGroupRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.OrganisationGroupsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiApiResponseBoolean, root.ChronoSheetsApi.CsApiApiResponseInt32, root.ChronoSheetsApi.CsApiApiResponseListOrganisationGroup, root.ChronoSheetsApi.CsApiApiResponseOrganisationGroup, root.ChronoSheetsApi.CsApiInsertOrganisationGroupRequest, root.ChronoSheetsApi.CsApiSaveOrganisationGroupRequest);
  }
}(this, function(ApiClient, CsApiApiResponseBoolean, CsApiApiResponseInt32, CsApiApiResponseListOrganisationGroup, CsApiApiResponseOrganisationGroup, CsApiInsertOrganisationGroupRequest, CsApiSaveOrganisationGroupRequest) {
  'use strict';

  /**
   * OrganisationGroups service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi
   * @version v1
   */

  /**
   * Constructs a new OrganisationGroupsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the organisationGroupsCreateOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsCreateOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an organisation group
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertOrganisationGroupRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsCreateOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32}
     */
    this.organisationGroupsCreateOrganisationGroup = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationGroupsCreateOrganisationGroup");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsCreateOrganisationGroup");
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
        '/api/OrganisationGroups/CreateOrganisationGroup', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a particular organisation group
     * @param {Number} organisationGroupId The ID of the organisation group you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroup = function(organisationGroupId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'organisationGroupId' is set
      if (organisationGroupId === undefined || organisationGroupId === null) {
        throw new Error("Missing the required parameter 'organisationGroupId' when calling organisationGroupsGetOrganisationGroup");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroup");
      }


      var pathParams = {
      };
      var queryParams = {
        'OrganisationGroupId': organisationGroupId,
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
      var returnType = CsApiApiResponseOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroup', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroups operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of organisation groups that are under your organisation
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroups = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroups");
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
      var returnType = CsApiApiResponseListOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroupsForJob operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForJobCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get org groups for a particular job
     * @param {Number} jobId The ID of the job
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForJobCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroupsForJob = function(jobId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'jobId' is set
      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling organisationGroupsGetOrganisationGroupsForJob");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroupsForJob");
      }


      var pathParams = {
      };
      var queryParams = {
        'JobId': jobId,
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
      var returnType = CsApiApiResponseListOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroupsForJob', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsGetOrganisationGroupsForVehicle operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForVehicleCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get org groups for a particular vehicle
     * @param {Number} vehicleId The ID of the vehicle
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsGetOrganisationGroupsForVehicleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListOrganisationGroup}
     */
    this.organisationGroupsGetOrganisationGroupsForVehicle = function(vehicleId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'vehicleId' is set
      if (vehicleId === undefined || vehicleId === null) {
        throw new Error("Missing the required parameter 'vehicleId' when calling organisationGroupsGetOrganisationGroupsForVehicle");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsGetOrganisationGroupsForVehicle");
      }


      var pathParams = {
      };
      var queryParams = {
        'VehicleId': vehicleId,
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
      var returnType = CsApiApiResponseListOrganisationGroup;

      return this.apiClient.callApi(
        '/api/OrganisationGroups/GetOrganisationGroupsForVehicle', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationGroupsUpdateOrganisationGroup operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsUpdateOrganisationGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organisation group
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSaveOrganisationGroupRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationGroupsApi~organisationGroupsUpdateOrganisationGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean}
     */
    this.organisationGroupsUpdateOrganisationGroup = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationGroupsUpdateOrganisationGroup");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGroupsUpdateOrganisationGroup");
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
        '/api/OrganisationGroups/UpdateOrganisationGroup', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
