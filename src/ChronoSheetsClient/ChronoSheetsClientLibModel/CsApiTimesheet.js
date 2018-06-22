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
    root.ChronoSheetsApi.CsApiTimesheet = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiTimesheet model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiTimesheet
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiTimesheet</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiTimesheet
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>CsApiTimesheet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiTimesheet} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiTimesheet} The populated <code>CsApiTimesheet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TimesheetId')) {
        obj['TimesheetId'] = ApiClient.convertToType(data['TimesheetId'], 'Number');
      }
      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
      }
      if (data.hasOwnProperty('JobId')) {
        obj['JobId'] = ApiClient.convertToType(data['JobId'], 'Number');
      }
      if (data.hasOwnProperty('TaskId')) {
        obj['TaskId'] = ApiClient.convertToType(data['TaskId'], 'Number');
      }
      if (data.hasOwnProperty('StartDateTime')) {
        obj['StartDateTime'] = ApiClient.convertToType(data['StartDateTime'], 'Date');
      }
      if (data.hasOwnProperty('EndDateTime')) {
        obj['EndDateTime'] = ApiClient.convertToType(data['EndDateTime'], 'Date');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('TripId')) {
        obj['TripId'] = ApiClient.convertToType(data['TripId'], 'Number');
      }
      if (data.hasOwnProperty('FileAttachmentCount')) {
        obj['FileAttachmentCount'] = ApiClient.convertToType(data['FileAttachmentCount'], 'Number');
      }
      if (data.hasOwnProperty('PayAmount')) {
        obj['PayAmount'] = ApiClient.convertToType(data['PayAmount'], 'Number');
      }
      if (data.hasOwnProperty('OvertimePayAmount')) {
        obj['OvertimePayAmount'] = ApiClient.convertToType(data['OvertimePayAmount'], 'Number');
      }
      if (data.hasOwnProperty('IncludesOvertime')) {
        obj['IncludesOvertime'] = ApiClient.convertToType(data['IncludesOvertime'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} TimesheetId
   */
  exports.prototype['TimesheetId'] = undefined;
  /**
   * @member {Number} UserId
   */
  exports.prototype['UserId'] = undefined;
  /**
   * @member {Number} JobId
   */
  exports.prototype['JobId'] = undefined;
  /**
   * @member {Number} TaskId
   */
  exports.prototype['TaskId'] = undefined;
  /**
   * @member {Date} StartDateTime
   */
  exports.prototype['StartDateTime'] = undefined;
  /**
   * @member {Date} EndDateTime
   */
  exports.prototype['EndDateTime'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} TripId
   */
  exports.prototype['TripId'] = undefined;
  /**
   * @member {Number} FileAttachmentCount
   */
  exports.prototype['FileAttachmentCount'] = undefined;
  /**
   * @member {Number} PayAmount
   */
  exports.prototype['PayAmount'] = undefined;
  /**
   * @member {Number} OvertimePayAmount
   */
  exports.prototype['OvertimePayAmount'] = undefined;
  /**
   * @member {Boolean} IncludesOvertime
   */
  exports.prototype['IncludesOvertime'] = undefined;



  return exports;
}));


