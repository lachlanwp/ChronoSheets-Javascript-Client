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
    root.ChronoSheetsApi.CSCreateTripRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSCreateTripRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateTripRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSCreateTripRequest</code>.
   * Contains fields for creating a Trip
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateTripRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSCreateTripRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateTripRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateTripRequest} The populated <code>CSCreateTripRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('TimesheetId'))
        obj.timesheetId = ApiClient.convertToType(data['TimesheetId'], 'Number');
      if (data.hasOwnProperty('VehicleId'))
        obj.vehicleId = ApiClient.convertToType(data['VehicleId'], 'Number');
      if (data.hasOwnProperty('PathCoordsStringCsv'))
        obj.pathCoordsStringCsv = ApiClient.convertToType(data['PathCoordsStringCsv'], 'String');
      if (data.hasOwnProperty('DistanceMeters'))
        obj.distanceMeters = ApiClient.convertToType(data['DistanceMeters'], 'Number');
      if (data.hasOwnProperty('MobilePlatform'))
        obj.mobilePlatform = ApiClient.convertToType(data['MobilePlatform'], 'String');
    }
    return obj;
  }

  /**
   * The associated Timesheet record Id.  The Trip will be linked to the Timesheet with this TimesheetId
   * @member {Number} timesheetId
   */
  exports.prototype.timesheetId = undefined;

  /**
   * The associated Vehicle Id.  The Trip will show that this Vehicle was used
   * @member {Number} vehicleId
   */
  exports.prototype.vehicleId = undefined;

  /**
   * A CSV of GPS path co-ordinates.  Format example: -37.8433562,144.7226188;[Lat1],[Long1];........[LatN],[LongN]
   * @member {String} pathCoordsStringCsv
   */
  exports.prototype.pathCoordsStringCsv = undefined;

  /**
   * The total distance of the Trip
   * @member {Number} distanceMeters
   */
  exports.prototype.distanceMeters = undefined;

  /**
   * The Mobile platform that the Trip was recorded on
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateTripRequest.MobilePlatformEnum} mobilePlatform
   */
  exports.prototype.mobilePlatform = undefined;


  /**
   * Allowed values for the <code>mobilePlatform</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MobilePlatformEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    unknown: "Unknown",

    /**
     * value: "iOS"
     * @const
     */
    iOS: "iOS",

    /**
     * value: "Android"
     * @const
     */
    android: "Android"
  };

  return exports;

}));
