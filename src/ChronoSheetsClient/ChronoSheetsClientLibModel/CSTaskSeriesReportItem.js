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
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSTaskSeriesReportItem = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSTaskSeriesReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSTaskSeriesReportItem
   * @version v1
   */

  /**
   * Constructs a new <code>CSTaskSeriesReportItem</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTaskSeriesReportItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CSTaskSeriesReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTaskSeriesReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTaskSeriesReportItem} The populated <code>CSTaskSeriesReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'Date');
      }
      if (data.hasOwnProperty('EndDate')) {
        obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
      }
      if (data.hasOwnProperty('TaskId')) {
        obj['TaskId'] = ApiClient.convertToType(data['TaskId'], 'Number');
      }
      if (data.hasOwnProperty('TaskName')) {
        obj['TaskName'] = ApiClient.convertToType(data['TaskName'], 'String');
      }
      if (data.hasOwnProperty('SpanSeconds')) {
        obj['SpanSeconds'] = ApiClient.convertToType(data['SpanSeconds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Date} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {Date} EndDate
   */
  exports.prototype['EndDate'] = undefined;
  /**
   * @member {Number} TaskId
   */
  exports.prototype['TaskId'] = undefined;
  /**
   * @member {String} TaskName
   */
  exports.prototype['TaskName'] = undefined;
  /**
   * @member {Number} SpanSeconds
   */
  exports.prototype['SpanSeconds'] = undefined;



  return exports;
}));

