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
    root.ChronoSheetsApi.CSTimeSlot = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSTimeSlot model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimeSlot
   * @version v1
   */

  /**
   * Constructs a new <code>CSTimeSlot</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimeSlot
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CSTimeSlot</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimeSlot} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimeSlot} The populated <code>CSTimeSlot</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DayType')) {
        obj['DayType'] = ApiClient.convertToType(data['DayType'], 'String');
      }
      if (data.hasOwnProperty('UsualHourId')) {
        obj['UsualHourId'] = ApiClient.convertToType(data['UsualHourId'], 'Number');
      }
      if (data.hasOwnProperty('StartHour')) {
        obj['StartHour'] = ApiClient.convertToType(data['StartHour'], 'Number');
      }
      if (data.hasOwnProperty('StartMinute')) {
        obj['StartMinute'] = ApiClient.convertToType(data['StartMinute'], 'Number');
      }
      if (data.hasOwnProperty('EndHour')) {
        obj['EndHour'] = ApiClient.convertToType(data['EndHour'], 'Number');
      }
      if (data.hasOwnProperty('EndMinute')) {
        obj['EndMinute'] = ApiClient.convertToType(data['EndMinute'], 'Number');
      }
      if (data.hasOwnProperty('IsValid')) {
        obj['IsValid'] = ApiClient.convertToType(data['IsValid'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimeSlot.DayTypeEnum} DayType
   */
  exports.prototype['DayType'] = undefined;
  /**
   * @member {Number} UsualHourId
   */
  exports.prototype['UsualHourId'] = undefined;
  /**
   * @member {Number} StartHour
   */
  exports.prototype['StartHour'] = undefined;
  /**
   * @member {Number} StartMinute
   */
  exports.prototype['StartMinute'] = undefined;
  /**
   * @member {Number} EndHour
   */
  exports.prototype['EndHour'] = undefined;
  /**
   * @member {Number} EndMinute
   */
  exports.prototype['EndMinute'] = undefined;
  /**
   * @member {Boolean} IsValid
   */
  exports.prototype['IsValid'] = undefined;


  /**
   * Allowed values for the <code>DayType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DayTypeEnum = {
    /**
     * value: "Monday"
     * @const
     */
    "Monday": "Monday",
    /**
     * value: "Tuesday"
     * @const
     */
    "Tuesday": "Tuesday",
    /**
     * value: "Wednesday"
     * @const
     */
    "Wednesday": "Wednesday",
    /**
     * value: "Thursday"
     * @const
     */
    "Thursday": "Thursday",
    /**
     * value: "Friday"
     * @const
     */
    "Friday": "Friday",
    /**
     * value: "Saturday"
     * @const
     */
    "Saturday": "Saturday",
    /**
     * value: "Sunday"
     * @const
     */
    "Sunday": "Sunday"  };


  return exports;
}));

