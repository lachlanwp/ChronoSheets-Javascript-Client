/*
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectCostingReportItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSProjectCostingReportItem'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSApiResponseListProjectCostingReportItem = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSProjectCostingReportItem);
  }
}(this, function(ApiClient, CSProjectCostingReportItem) {
  'use strict';

  /**
   * The CSApiResponseListProjectCostingReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSApiResponseListProjectCostingReportItem</code>.
   * A standard API response
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSApiResponseListProjectCostingReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem} The populated <code>CSApiResponseListProjectCostingReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.data = ApiClient.convertToType(data['Data'], [CSProjectCostingReportItem]);
      if (data.hasOwnProperty('Status'))
        obj.status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('Message'))
        obj.message = ApiClient.convertToType(data['Message'], 'String');
    }
    return obj;
  }

  /**
   * The main Data of the response
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectCostingReportItem>} data
   */
  exports.prototype.data = undefined;

  /**
   * The API response status. Indicates if the request was successful, failed or was unauthorised.
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListProjectCostingReportItem.StatusEnum} status
   */
  exports.prototype.status = undefined;

  /**
   * A message to accompany the response status.  If the Status is failed, this message will hint why it failed and what you need to do.
   * @member {String} message
   */
  exports.prototype.message = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Succeeded"
     * @const
     */
    succeeded: "Succeeded",

    /**
     * value: "FatalException"
     * @const
     */
    fatalException: "FatalException",

    /**
     * value: "GeneralError"
     * @const
     */
    generalError: "GeneralError",

    /**
     * value: "ValidationError"
     * @const
     */
    validationError: "ValidationError",

    /**
     * value: "UnAuthorized"
     * @const
     */
    unAuthorized: "UnAuthorized",

    /**
     * value: "SessionExpired"
     * @const
     */
    sessionExpired: "SessionExpired"
  };

  return exports;

}));
