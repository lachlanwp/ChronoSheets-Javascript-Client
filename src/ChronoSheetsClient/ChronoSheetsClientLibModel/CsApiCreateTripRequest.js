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
    root.ChronoSheetsApi.CsApiCreateTripRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiCreateTripRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiCreateTripRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiCreateTripRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiCreateTripRequest
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CsApiCreateTripRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiCreateTripRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiCreateTripRequest} The populated <code>CsApiCreateTripRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TimesheetId')) {
        obj['TimesheetId'] = ApiClient.convertToType(data['TimesheetId'], 'Number');
      }
      if (data.hasOwnProperty('VehicleId')) {
        obj['VehicleId'] = ApiClient.convertToType(data['VehicleId'], 'Number');
      }
      if (data.hasOwnProperty('PathCoordsStringCsv')) {
        obj['PathCoordsStringCsv'] = ApiClient.convertToType(data['PathCoordsStringCsv'], 'String');
      }
      if (data.hasOwnProperty('DistanceMeters')) {
        obj['DistanceMeters'] = ApiClient.convertToType(data['DistanceMeters'], 'Number');
      }
      if (data.hasOwnProperty('MobilePlatform')) {
        obj['MobilePlatform'] = ApiClient.convertToType(data['MobilePlatform'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} TimesheetId
   */
  exports.prototype['TimesheetId'] = undefined;
  /**
   * @member {Number} VehicleId
   */
  exports.prototype['VehicleId'] = undefined;
  /**
   * @member {String} PathCoordsStringCsv
   */
  exports.prototype['PathCoordsStringCsv'] = undefined;
  /**
   * @member {Number} DistanceMeters
   */
  exports.prototype['DistanceMeters'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiCreateTripRequest.MobilePlatformEnum} MobilePlatform
   */
  exports.prototype['MobilePlatform'] = undefined;


  /**
   * Allowed values for the <code>MobilePlatform</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MobilePlatformEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "iOS"
     * @const
     */
    "iOS": "iOS",
    /**
     * value: "Android"
     * @const
     */
    "Android": "Android"  };


  return exports;
}));


