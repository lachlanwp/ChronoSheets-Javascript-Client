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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseDoLoginResponse', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUpdateProfileResponse', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUserProfile', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSDoLoginRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateMyProfileRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CSApiResponseDoLoginResponse'), require('../ChronoSheetsClientLibModel/CSApiResponseUpdateProfileResponse'), require('../ChronoSheetsClientLibModel/CSApiResponseUserProfile'), require('../ChronoSheetsClientLibModel/CSDoLoginRequest'), require('../ChronoSheetsClientLibModel/CSUpdateMyProfileRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.JavascriptApiClientForChronoSheets) {
      root.JavascriptApiClientForChronoSheets = {};
    }
    root.JavascriptApiClientForChronoSheets.UserProfileApi = factory(root.JavascriptApiClientForChronoSheets.ApiClient, root.JavascriptApiClientForChronoSheets.CSApiResponseBoolean, root.JavascriptApiClientForChronoSheets.CSApiResponseDoLoginResponse, root.JavascriptApiClientForChronoSheets.CSApiResponseUpdateProfileResponse, root.JavascriptApiClientForChronoSheets.CSApiResponseUserProfile, root.JavascriptApiClientForChronoSheets.CSDoLoginRequest, root.JavascriptApiClientForChronoSheets.CSUpdateMyProfileRequest);
  }
}(this, function(ApiClient, CSApiResponseBoolean, CSApiResponseDoLoginResponse, CSApiResponseUpdateProfileResponse, CSApiResponseUserProfile, CSDoLoginRequest, CSUpdateMyProfileRequest) {
  'use strict';

  /**
   * UserProfile service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserProfileApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the userProfileDoLogin operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseDoLoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login to your ChronoSheets account and obtain an Auth Token which you can use for other ChronoSheets API methods.    Does not require any special permissions.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSDoLoginRequest} request A request object containing your username/email and password.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseDoLoginResponse}
     */
    this.userProfileDoLogin = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling userProfileDoLogin");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml', 'multipart/form-data'];
      var returnType = CSApiResponseDoLoginResponse;

      return this.apiClient.callApi(
        '/api/UserProfile/DoLogin', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileDoLogout operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLogoutCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Logout of your ChronoSheets account.  This method ends and deletes your active session.    Does not require any special permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileDoLogoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.userProfileDoLogout = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileDoLogout");
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
      var returnType = CSApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/UserProfile/DoLogout', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileGetMyProfile operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileGetMyProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUserProfile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get your own profile.  Use this method to obtain detailed information about your ChronoSheets user profile.    Does not require any special permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileGetMyProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUserProfile}
     */
    this.userProfileGetMyProfile = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileGetMyProfile");
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
      var returnType = CSApiResponseUserProfile;

      return this.apiClient.callApi(
        '/api/UserProfile/GetMyProfile', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileKeepSessionAlive operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileKeepSessionAliveCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Keep a session alive.  Use this method to keep a session active.  You could use this to &#39;ping&#39; ChronoSheets every &#39;x&#39; minutes to make sure your Auth Token will keep working.    Does not require any special permissions.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileKeepSessionAliveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.userProfileKeepSessionAlive = function(xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileKeepSessionAlive");
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
      var returnType = CSApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/UserProfile/KeepSessionAlive', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userProfileUpdateMyProfile operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileUpdateMyProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUpdateProfileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update your own profile.  Use this method to update your profile information or update/change your password.    Does not require any special permissions.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateMyProfileRequest} request An Update MyProfile Request object containing updated fields.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/UserProfileApi~userProfileUpdateMyProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseUpdateProfileResponse}
     */
    this.userProfileUpdateMyProfile = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling userProfileUpdateMyProfile");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling userProfileUpdateMyProfile");
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
      var returnType = CSApiResponseUpdateProfileResponse;

      return this.apiClient.callApi(
        '/api/UserProfile/UpdateMyProfile', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
