/**
 * ChronoSheets API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CsApiProjectTotalsReportItem = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiProjectTotalsReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectTotalsReportItem
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiProjectTotalsReportItem</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectTotalsReportItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CsApiProjectTotalsReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectTotalsReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiProjectTotalsReportItem} The populated <code>CsApiProjectTotalsReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OrganisationId')) {
        obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
      }
      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
      }
      if (data.hasOwnProperty('ProjectId')) {
        obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'Number');
      }
      if (data.hasOwnProperty('ProjectName')) {
        obj['ProjectName'] = ApiClient.convertToType(data['ProjectName'], 'String');
      }
      if (data.hasOwnProperty('SpanSeconds')) {
        obj['SpanSeconds'] = ApiClient.convertToType(data['SpanSeconds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} OrganisationId
   */
  exports.prototype['OrganisationId'] = undefined;
  /**
   * @member {Number} UserId
   */
  exports.prototype['UserId'] = undefined;
  /**
   * @member {Number} ProjectId
   */
  exports.prototype['ProjectId'] = undefined;
  /**
   * @member {String} ProjectName
   */
  exports.prototype['ProjectName'] = undefined;
  /**
   * @member {Number} SpanSeconds
   */
  exports.prototype['SpanSeconds'] = undefined;



  return exports;
}));


