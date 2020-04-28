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
    root.ChronoSheetsApi.CSUpdateJobCodeRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSUpdateJobCodeRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateJobCodeRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSUpdateJobCodeRequest</code>.
   * Fields used to update an existing JobCode
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateJobCodeRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSUpdateJobCodeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateJobCodeRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateJobCodeRequest} The populated <code>CSUpdateJobCodeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
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
      if (data.hasOwnProperty('IsDeleted'))
        obj.isDeleted = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
    }
    return obj;
  }

  /**
   * The Id of the JobCode to be updated
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * The new JobCode to be set
   * @member {String} code
   */
  exports.prototype.code = undefined;

  /**
   * The Id of the Project to be associated to
   * @member {Number} projectId
   */
  exports.prototype.projectId = undefined;

  /**
   * The Id of the Client to be associated to
   * @member {Number} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * A collection of Task Ids to be available when choosing this JobCode
   * @member {Array.<Number>} linkedTaskIds
   */
  exports.prototype.linkedTaskIds = undefined;

  /**
   * Restrict the access to this JobCode by specifying which Organisation Groups can have access.  Only employees in these Organisation Groups will be able to access this JobCode
   * @member {Array.<Number>} linkedOrgGroupIds
   */
  exports.prototype.linkedOrgGroupIds = undefined;

  /**
   * Whether or not this JobCode is to be marked as deleted
   * @member {Boolean} isDeleted
   */
  exports.prototype.isDeleted = undefined;

  return exports;

}));
