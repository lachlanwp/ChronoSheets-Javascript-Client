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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProject', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseProject', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertProjectRequest', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateProjectRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../ChronoSheetsClientLibModel/CSApiResponseBoolean'), require('../ChronoSheetsClientLibModel/CSApiResponseInt32'), require('../ChronoSheetsClientLibModel/CSApiResponseListProject'), require('../ChronoSheetsClientLibModel/CSApiResponseProject'), require('../ChronoSheetsClientLibModel/CSInsertProjectRequest'), require('../ChronoSheetsClientLibModel/CSUpdateProjectRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.ProjectsApi = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSApiResponseBoolean, root.ChronoSheetsApi.CSApiResponseInt32, root.ChronoSheetsApi.CSApiResponseListProject, root.ChronoSheetsApi.CSApiResponseProject, root.ChronoSheetsApi.CSInsertProjectRequest, root.ChronoSheetsApi.CSUpdateProjectRequest);
  }
}(this, function(ApiClient, CSApiResponseBoolean, CSApiResponseInt32, CSApiResponseListProject, CSApiResponseProject, CSInsertProjectRequest, CSUpdateProjectRequest) {
  'use strict';

  /**
   * Projects service.
   * @module ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ProjectsApi. 
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi
   * @class
   * @param {module:ChronoSheetsClient/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ChronoSheetsClient/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the projectsCreateProject operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsCreateProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project.    Requires the 'ManageClientsAndProjects' permission.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertProjectRequest} request An Insert Project Request object containing values for the new Project to create.  Make sure to specify a correct Client Id - this will be used to attach the new project under that client.
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsCreateProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseInt32}
     */
    this.projectsCreateProject = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling projectsCreateProject");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling projectsCreateProject");
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
      var returnType = CSApiResponseInt32;

      return this.apiClient.callApi(
        '/api/Projects/CreateProject', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsGetProjectById operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsGetProjectByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseProject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project by its Id.    Requires the 'ManageClientsAndProjects' or 'ManageJobsAndTask' permissions.
     * @param {Number} projectId The ID of the Project you want to get
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsGetProjectByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseProject}
     */
    this.projectsGetProjectById = function(projectId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsGetProjectById");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling projectsGetProjectById");
      }


      var pathParams = {
      };
      var queryParams = {
        'ProjectId': projectId,
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
      var returnType = CSApiResponseProject;

      return this.apiClient.callApi(
        '/api/Projects/GetProjectById', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsGetProjectsForClient operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsGetProjectsForClientCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get projects for a particular client.    Requires the 'ManageClientsAndProjects' or 'ManageJobsAndTask' permissions.
     * @param {Number} clientId The ID of the client
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsGetProjectsForClientCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProject}
     */
    this.projectsGetProjectsForClient = function(clientId, xChronosheetsAuth, callback) {
      var postBody = null;

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling projectsGetProjectsForClient");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling projectsGetProjectsForClient");
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
      var returnType = CSApiResponseListProject;

      return this.apiClient.callApi(
        '/api/Projects/GetProjectsForClient', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsUpdateProject operation.
     * @callback module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsUpdateProjectCallback
     * @param {String} error Error message, if any.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a project.    Requires the 'ManageClientsAndProjects' permission.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateProjectRequest} request An Update Project Request object containing updated fields.  Make sure to specify the Project Id in the request object so that ChronoSheets knows which Project to update
     * @param {String} xChronosheetsAuth The ChronoSheets Auth Token
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibApi/ProjectsApi~projectsUpdateProjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseBoolean}
     */
    this.projectsUpdateProject = function(request, xChronosheetsAuth, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling projectsUpdateProject");
      }

      // verify the required parameter 'xChronosheetsAuth' is set
      if (xChronosheetsAuth === undefined || xChronosheetsAuth === null) {
        throw new Error("Missing the required parameter 'xChronosheetsAuth' when calling projectsUpdateProject");
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
      var returnType = CSApiResponseBoolean;

      return this.apiClient.callApi(
        '/api/Projects/UpdateProject', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
