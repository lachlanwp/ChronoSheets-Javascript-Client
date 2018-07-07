/**
 * The ChronoSheets API
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSTripCoordinate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSTripCoordinate'));
  } else {
    // Browser globals (root is window)
    if (!root.TheChronoSheetsApi) {
      root.TheChronoSheetsApi = {};
    }
    root.TheChronoSheetsApi.CSOrgReportTrip = factory(root.TheChronoSheetsApi.ApiClient, root.TheChronoSheetsApi.CSTripCoordinate);
  }
}(this, function(ApiClient, CSTripCoordinate) {
  'use strict';




  /**
   * The CSOrgReportTrip model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrgReportTrip
   * @version v1
   */

  /**
   * Constructs a new <code>CSOrgReportTrip</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrgReportTrip
   * @class
   */
  var exports = function() {
    var _this = this;
























  };

  /**
   * Constructs a <code>CSOrgReportTrip</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrgReportTrip} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrgReportTrip} The populated <code>CSOrgReportTrip</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Username')) {
        obj['Username'] = ApiClient.convertToType(data['Username'], 'String');
      }
      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('TripId')) {
        obj['TripId'] = ApiClient.convertToType(data['TripId'], 'Number');
      }
      if (data.hasOwnProperty('TimesheetId')) {
        obj['TimesheetId'] = ApiClient.convertToType(data['TimesheetId'], 'Number');
      }
      if (data.hasOwnProperty('VehicleId')) {
        obj['VehicleId'] = ApiClient.convertToType(data['VehicleId'], 'Number');
      }
      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
      }
      if (data.hasOwnProperty('OrgId')) {
        obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'Number');
      }
      if (data.hasOwnProperty('MobilePlatform')) {
        obj['MobilePlatform'] = ApiClient.convertToType(data['MobilePlatform'], 'String');
      }
      if (data.hasOwnProperty('StartDate')) {
        obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'Date');
      }
      if (data.hasOwnProperty('EndDate')) {
        obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
      }
      if (data.hasOwnProperty('VehicleName')) {
        obj['VehicleName'] = ApiClient.convertToType(data['VehicleName'], 'String');
      }
      if (data.hasOwnProperty('VehicleMake')) {
        obj['VehicleMake'] = ApiClient.convertToType(data['VehicleMake'], 'String');
      }
      if (data.hasOwnProperty('VehicleModel')) {
        obj['VehicleModel'] = ApiClient.convertToType(data['VehicleModel'], 'String');
      }
      if (data.hasOwnProperty('VehicleYear')) {
        obj['VehicleYear'] = ApiClient.convertToType(data['VehicleYear'], 'String');
      }
      if (data.hasOwnProperty('CostPerKilometer')) {
        obj['CostPerKilometer'] = ApiClient.convertToType(data['CostPerKilometer'], 'Number');
      }
      if (data.hasOwnProperty('TripTotalCost')) {
        obj['TripTotalCost'] = ApiClient.convertToType(data['TripTotalCost'], 'Number');
      }
      if (data.hasOwnProperty('TotalTripDistanceMeters')) {
        obj['TotalTripDistanceMeters'] = ApiClient.convertToType(data['TotalTripDistanceMeters'], 'Number');
      }
      if (data.hasOwnProperty('StartAddress')) {
        obj['StartAddress'] = ApiClient.convertToType(data['StartAddress'], 'String');
      }
      if (data.hasOwnProperty('EndAddress')) {
        obj['EndAddress'] = ApiClient.convertToType(data['EndAddress'], 'String');
      }
      if (data.hasOwnProperty('PathCoordinates')) {
        obj['PathCoordinates'] = ApiClient.convertToType(data['PathCoordinates'], [CSTripCoordinate]);
      }
      if (data.hasOwnProperty('CacheExpiryDate')) {
        obj['CacheExpiryDate'] = ApiClient.convertToType(data['CacheExpiryDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} Username
   */
  exports.prototype['Username'] = undefined;
  /**
   * @member {String} EmailAddress
   */
  exports.prototype['EmailAddress'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {Number} TripId
   */
  exports.prototype['TripId'] = undefined;
  /**
   * @member {Number} TimesheetId
   */
  exports.prototype['TimesheetId'] = undefined;
  /**
   * @member {Number} VehicleId
   */
  exports.prototype['VehicleId'] = undefined;
  /**
   * @member {Number} UserId
   */
  exports.prototype['UserId'] = undefined;
  /**
   * @member {Number} OrgId
   */
  exports.prototype['OrgId'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrgReportTrip.MobilePlatformEnum} MobilePlatform
   */
  exports.prototype['MobilePlatform'] = undefined;
  /**
   * @member {Date} StartDate
   */
  exports.prototype['StartDate'] = undefined;
  /**
   * @member {Date} EndDate
   */
  exports.prototype['EndDate'] = undefined;
  /**
   * @member {String} VehicleName
   */
  exports.prototype['VehicleName'] = undefined;
  /**
   * @member {String} VehicleMake
   */
  exports.prototype['VehicleMake'] = undefined;
  /**
   * @member {String} VehicleModel
   */
  exports.prototype['VehicleModel'] = undefined;
  /**
   * @member {String} VehicleYear
   */
  exports.prototype['VehicleYear'] = undefined;
  /**
   * @member {Number} CostPerKilometer
   */
  exports.prototype['CostPerKilometer'] = undefined;
  /**
   * @member {Number} TripTotalCost
   */
  exports.prototype['TripTotalCost'] = undefined;
  /**
   * @member {Number} TotalTripDistanceMeters
   */
  exports.prototype['TotalTripDistanceMeters'] = undefined;
  /**
   * @member {String} StartAddress
   */
  exports.prototype['StartAddress'] = undefined;
  /**
   * @member {String} EndAddress
   */
  exports.prototype['EndAddress'] = undefined;
  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTripCoordinate>} PathCoordinates
   */
  exports.prototype['PathCoordinates'] = undefined;
  /**
   * @member {Date} CacheExpiryDate
   */
  exports.prototype['CacheExpiryDate'] = undefined;


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


