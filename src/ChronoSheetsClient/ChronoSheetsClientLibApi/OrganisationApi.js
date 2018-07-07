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
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseOrganisation', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUpdateOrganisationResponse', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateOrganisationRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseOrganisation'), require('../ChronoSheetsClientLibModel/CSApiResponseUpdateOrganisationResponse'), require('../ChronoSheetsClientLibModel/CSUpdateOrganisationRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.TheChronoSheetsApi) {
      root.TheChronoSheetsApi = {};
    }
    root.TheChronoSheetsApi.OrganisationApi = factory(root.TheChronoSheetsApi.ApiClient, root.TheChronoSheetsApi.CSApiResponseOrganisation, root.TheChronoSheetsApi.CSApiResponseUpdateOrganisationResponse, root.TheChronoSheetsApi.CSUpdateOrganisationRequest);
  }
}(this, function(ApiClient, CSApiResponseOrganisation, CSApiResponseUpdateOrganisationResponse, CSUpdateOrganisationRequest) {
  'use strict';

  /**
   * Organisation service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi
   * @version v1
   */

  /**
   * Constructs a new OrganisationApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the organisationGetOrganisation operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationGetOrganisationCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseOrganisation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your organisation.    Requires &#39;OrganisationAdmin&#39; permission.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationGetOrganisationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseOrganisation}
     */
    this.organisationGetOrganisation = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationGetOrganisation");
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
      var returnType = CSApiResponseOrganisation;

      return this.apiClient.callApi(
        '/api/Organisation/GetOrganisation', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the organisationUpdateOrganisation operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationUpdateOrganisationCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUpdateOrganisationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an organisation.    Requires &#39;OrganisationAdmin&#39; permission.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateOrganisationRequest} request An Update Organsation Request object containing updated fields.  Make sure to specify the Organsation Id in the request object so that ChronoSheets knows which Organsation to update
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/OrganisationApi~organisationUpdateOrganisationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUpdateOrganisationResponse}
     */
    this.organisationUpdateOrganisation = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling organisationUpdateOrganisation");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling organisationUpdateOrganisation");
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
      var returnType = CSApiResponseUpdateOrganisationResponse;

      return this.apiClient.callApi(
        '/api/Organisation/UpdateOrganisation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
