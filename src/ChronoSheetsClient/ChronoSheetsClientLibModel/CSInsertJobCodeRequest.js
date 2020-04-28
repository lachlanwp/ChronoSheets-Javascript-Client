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
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSInsertJobCodeRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSInsertJobCodeRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertJobCodeRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSInsertJobCodeRequest</code>.
   * Fields for inserting a new Job Code
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertJobCodeRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSInsertJobCodeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertJobCodeRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertJobCodeRequest} The populated <code>CSInsertJobCodeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Code'))
        obj.code = ApiClient.convertToType(data['Code'], 'String');
      if (data.hasOwnProperty('ProjectId'))
        obj.projectId = ApiClient.convertToType(data['ProjectId'], 'Number');
      if (data.hasOwnProperty('ClientId'))
        obj.clientId = ApiClient.convertToType(data['ClientId'], 'Number');
      if (data.hasOwnProperty('LinkedTaskIds'))
        obj.linkedTaskIds = ApiClient.convertToType(data['LinkedTaskIds'], ['Number']);
      if (data.hasOwnProperty('LinkedOrgGroupIds'))
        obj.linkedOrgGroupIds = ApiClient.convertToType(data['LinkedOrgGroupIds'], ['Number']);
    }
    return obj;
  }

  /**
   * A short code for the Job.  This is referred to as a Job Code
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * The linked Project.  Time spent with this JobCode is on this Project
   * @member {Number} projectId
   */
  exports.prototype.projectId = undefined;

  /**
   * The linked Client.  Time spent with this JobCode is for this Client
   * @member {Number} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * A list of Task Ids.  This are the Tasks that become available to the employee when they select this JobCode
   * @member {Array.<Number>} linkedTaskIds
   */
  exports.prototype.linkedTaskIds = undefined;

  /**
   * Optionally restrict access to the JobCode by specifying which Organisation Groups can use it
   * @member {Array.<Number>} linkedOrgGroupIds
   */
  exports.prototype.linkedOrgGroupIds = undefined;

  return exports;

}));
