/*
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
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
    root.ChronoSheetsApi.CSCreateAutomationStepRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSCreateAutomationStepRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateAutomationStepRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSCreateAutomationStepRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateAutomationStepRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSCreateAutomationStepRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateAutomationStepRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateAutomationStepRequest} The populated <code>CSCreateAutomationStepRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('GeofencingId'))
        obj.geofencingId = ApiClient.convertToType(data['GeofencingId'], 'Number');
      if (data.hasOwnProperty('NfcId'))
        obj.nfcId = ApiClient.convertToType(data['NfcId'], 'Number');
      if (data.hasOwnProperty('AutomationActionType'))
        obj.automationActionType = ApiClient.convertToType(data['AutomationActionType'], 'String');
      if (data.hasOwnProperty('Latitude'))
        obj.latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Longitude'))
        obj.longitude = ApiClient.convertToType(data['Longitude'], 'Number');
      if (data.hasOwnProperty('ClientTime'))
        obj.clientTime = ApiClient.convertToType(data['ClientTime'], 'Date');
    }
    return obj;
  }

  /**
   * @member {Number} geofencingId
   */
  exports.prototype.geofencingId = undefined;

  /**
   * @member {Number} nfcId
   */
  exports.prototype.nfcId = undefined;

  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSCreateAutomationStepRequest.AutomationActionTypeEnum} automationActionType
   */
  exports.prototype.automationActionType = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  /**
   * @member {Date} clientTime
   */
  exports.prototype.clientTime = undefined;


  /**
   * Allowed values for the <code>automationActionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AutomationActionTypeEnum = {
    /**
     * value: "EnterGeofence"
     * @const
     */
    enterGeofence: "EnterGeofence",

    /**
     * value: "ExitGeofence"
     * @const
     */
    exitGeofence: "ExitGeofence",

    /**
     * value: "TapOnNfc"
     * @const
     */
    tapOnNfc: "TapOnNfc"
  };

  return exports;

}));