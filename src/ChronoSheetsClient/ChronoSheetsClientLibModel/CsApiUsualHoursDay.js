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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiTimeSlot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CsApiTimeSlot'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CsApiUsualHoursDay = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CsApiTimeSlot);
  }
}(this, function(ApiClient, CsApiTimeSlot) {
  'use strict';




  /**
   * The CsApiUsualHoursDay model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUsualHoursDay
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiUsualHoursDay</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUsualHoursDay
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CsApiUsualHoursDay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUsualHoursDay} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUsualHoursDay} The populated <code>CsApiUsualHoursDay</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DayType')) {
        obj['DayType'] = ApiClient.convertToType(data['DayType'], 'String');
      }
      if (data.hasOwnProperty('TimeSlots')) {
        obj['TimeSlots'] = ApiClient.convertToType(data['TimeSlots'], [CsApiTimeSlot]);
      }
      if (data.hasOwnProperty('DeleteUsualHours')) {
        obj['DeleteUsualHours'] = ApiClient.convertToType(data['DeleteUsualHours'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUsualHoursDay.DayTypeEnum} DayType
   */
  exports.prototype['DayType'] = undefined;
  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiTimeSlot>} TimeSlots
   */
  exports.prototype['TimeSlots'] = undefined;
  /**
   * @member {Array.<Number>} DeleteUsualHours
   */
  exports.prototype['DeleteUsualHours'] = undefined;


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


