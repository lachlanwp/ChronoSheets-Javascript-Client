/**
 * ChronoSheets API
 * ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.
 *
 * OpenAPI spec version: v1
 * Contact: lachlan@chronosheets.com
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertClientRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSaveClientRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CsApiApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CsApiApiResponseClient'), require('../ChronoSheetsClientLibModel/CsApiApiResponseInt32'), require('../ChronoSheetsClientLibModel/CsApiApiResponseListClient'), require('../ChronoSheetsClientLibModel/CsApiInsertClientRequest'), require('../ChronoSheetsClientLibModel/CsApiSaveClientRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.ClientsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiApiResponseBoolean, root.ChronoSheetsApi.CsApiApiResponseClient, root.ChronoSheetsApi.CsApiApiResponseInt32, root.ChronoSheetsApi.CsApiApiResponseListClient, root.ChronoSheetsApi.CsApiInsertClientRequest, root.ChronoSheetsApi.CsApiSaveClientRequest);
  }
}(this, function(ApiClient, CsApiApiResponseBoolean, CsApiApiResponseClient, CsApiApiResponseInt32, CsApiApiResponseListClient, CsApiInsertClientRequest, CsApiSaveClientRequest) {
  'use strict';

  /**
   * Clients service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi
   * @version v1
   */

  /**
   * Constructs a new ClientsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the clientsCreateClient operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsCreateClientCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a client
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiInsertClientRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsCreateClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseInt32}
     */
    this.clientsCreateClient = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling clientsCreateClient");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling clientsCreateClient");
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
        '/api/Clients/CreateClient', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clientsGetClient operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsGetClientCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a particular client
     * @param {Number} clientId The ID of the client you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsGetClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseClient}
     */
    this.clientsGetClient = function(clientId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling clientsGetClient");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling clientsGetClient");
      }


      var pathParams = {
      };
      var queryParams = {
        'ClientId': clientId,
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
      var returnType = CsApiApiResponseClient;

      return this.apiClient.callApi(
        '/api/Clients/GetClient', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clientsGetClients operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsGetClientsCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListClient} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a collection of clients that are under your organisation
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsGetClientsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseListClient}
     */
    this.clientsGetClients = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling clientsGetClients");
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
      var returnType = CsApiApiResponseListClient;

      return this.apiClient.callApi(
        '/api/Clients/GetClients', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the clientsUpdateClient operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsUpdateClientCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a client
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiSaveClientRequest} request 
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ClientsApi~clientsUpdateClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseBoolean}
     */
    this.clientsUpdateClient = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling clientsUpdateClient");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling clientsUpdateClient");
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
        '/api/Clients/UpdateClient', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
