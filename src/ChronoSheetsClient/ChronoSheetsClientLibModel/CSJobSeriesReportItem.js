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
    root.ChronoSheetsApi.CSJobSeriesReportItem = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSJobSeriesReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobSeriesReportItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSJobSeriesReportItem</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobSeriesReportItem
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSJobSeriesReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobSeriesReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobSeriesReportItem} The populated <code>CSJobSeriesReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('StartDate'))
        obj.startDate = ApiClient.convertToType(data['StartDate'], 'Date');
      if (data.hasOwnProperty('EndDate'))
        obj.endDate = ApiClient.convertToType(data['EndDate'], 'Date');
      if (data.hasOwnProperty('JobId'))
        obj.jobId = ApiClient.convertToType(data['JobId'], 'Number');
      if (data.hasOwnProperty('ClientId'))
        obj.clientId = ApiClient.convertToType(data['ClientId'], 'Number');
      if (data.hasOwnProperty('ClientName'))
        obj.clientName = ApiClient.convertToType(data['ClientName'], 'String');
      if (data.hasOwnProperty('ProjectId'))
        obj.projectId = ApiClient.convertToType(data['ProjectId'], 'Number');
      if (data.hasOwnProperty('ProjectName'))
        obj.projectName = ApiClient.convertToType(data['ProjectName'], 'String');
      if (data.hasOwnProperty('SpanSeconds'))
        obj.spanSeconds = ApiClient.convertToType(data['SpanSeconds'], 'Number');
      if (data.hasOwnProperty('JobCode'))
        obj.jobCode = ApiClient.convertToType(data['JobCode'], 'String');
    }
    return obj;
  }

  /**
   * @member {Date} startDate
   */
  exports.prototype.startDate = undefined;

  /**
   * @member {Date} endDate
   */
  exports.prototype.endDate = undefined;

  /**
   * @member {Number} jobId
   */
  exports.prototype.jobId = undefined;

  /**
   * @member {Number} clientId
   */
  exports.prototype.clientId = undefined;

  /**
   * @member {String} clientName
   */
  exports.prototype.clientName = undefined;

  /**
   * @member {Number} projectId
   */
  exports.prototype.projectId = undefined;

  /**
   * @member {String} projectName
   */
  exports.prototype.projectName = undefined;

  /**
   * @member {Number} spanSeconds
   */
  exports.prototype.spanSeconds = undefined;

  /**
   * @member {String} jobCode
   */
  exports.prototype.jobCode = undefined;

  return exports;

}));
