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
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.JavascriptApiClientForChronoSheets) {
      root.JavascriptApiClientForChronoSheets = {};
    }
    root.JavascriptApiClientForChronoSheets.CSProjectCostingReportItem = factory(root.JavascriptApiClientForChronoSheets.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSProjectCostingReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectCostingReportItem
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSProjectCostingReportItem</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectCostingReportItem
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CSProjectCostingReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectCostingReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSProjectCostingReportItem} The populated <code>CSProjectCostingReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ProjectId')) {
        obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'Number');
      }
      if (data.hasOwnProperty('ProjectName')) {
        obj['ProjectName'] = ApiClient.convertToType(data['ProjectName'], 'String');
      }
      if (data.hasOwnProperty('ClientId')) {
        obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'Number');
      }
      if (data.hasOwnProperty('OrganisationId')) {
        obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
      }
      if (data.hasOwnProperty('ClientName')) {
        obj['ClientName'] = ApiClient.convertToType(data['ClientName'], 'String');
      }
      if (data.hasOwnProperty('EstimatedCost')) {
        obj['EstimatedCost'] = ApiClient.convertToType(data['EstimatedCost'], 'Number');
      }
      if (data.hasOwnProperty('ActualCostFiltered')) {
        obj['ActualCostFiltered'] = ApiClient.convertToType(data['ActualCostFiltered'], 'Number');
      }
      if (data.hasOwnProperty('ActualCost')) {
        obj['ActualCost'] = ApiClient.convertToType(data['ActualCost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} ProjectId
   */
  exports.prototype['ProjectId'] = undefined;
  /**
   * @member {String} ProjectName
   */
  exports.prototype['ProjectName'] = undefined;
  /**
   * @member {Number} ClientId
   */
  exports.prototype['ClientId'] = undefined;
  /**
   * @member {Number} OrganisationId
   */
  exports.prototype['OrganisationId'] = undefined;
  /**
   * @member {String} ClientName
   */
  exports.prototype['ClientName'] = undefined;
  /**
   * @member {Number} EstimatedCost
   */
  exports.prototype['EstimatedCost'] = undefined;
  /**
   * @member {Number} ActualCostFiltered
   */
  exports.prototype['ActualCostFiltered'] = undefined;
  /**
   * @member {Number} ActualCost
   */
  exports.prototype['ActualCost'] = undefined;



  return exports;
}));


