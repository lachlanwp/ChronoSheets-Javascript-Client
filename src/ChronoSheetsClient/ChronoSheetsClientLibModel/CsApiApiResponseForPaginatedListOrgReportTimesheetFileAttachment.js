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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CsApiOrgReportTimesheetFileAttachment'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiOrgReportTimesheetFileAttachment);
  }
}(this, function(ApiClient, CsApiOrgReportTimesheetFileAttachment) {
  'use strict';




  /**
   * The CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment} The populated <code>CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TotalSetCount')) {
        obj['TotalSetCount'] = ApiClient.convertToType(data['TotalSetCount'], 'Number');
      }
      if (data.hasOwnProperty('Data')) {
        obj['Data'] = ApiClient.convertToType(data['Data'], [CsApiOrgReportTimesheetFileAttachment]);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} TotalSetCount
   */
  exports.prototype['TotalSetCount'] = undefined;
  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiOrgReportTimesheetFileAttachment>} Data
   */
  exports.prototype['Data'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiApiResponseForPaginatedListOrgReportTimesheetFileAttachment.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded",
    /**
     * value: "FatalException"
     * @const
     */
    "FatalException": "FatalException",
    /**
     * value: "GeneralError"
     * @const
     */
    "GeneralError": "GeneralError",
    /**
     * value: "ValidationError"
     * @const
     */
    "ValidationError": "ValidationError",
    /**
     * value: "UnAuthorized"
     * @const
     */
    "UnAuthorized": "UnAuthorized",
    /**
     * value: "SessionExpired"
     * @const
     */
    "SessionExpired": "SessionExpired"  };


  return exports;
}));


