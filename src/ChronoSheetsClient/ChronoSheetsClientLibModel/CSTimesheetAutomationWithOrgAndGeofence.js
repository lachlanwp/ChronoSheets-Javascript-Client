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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSBasicCoordinate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSBasicCoordinate'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSTimesheetAutomationWithOrgAndGeofence = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSBasicCoordinate);
  }
}(this, function(ApiClient, CSBasicCoordinate) {
  'use strict';

  /**
   * The CSTimesheetAutomationWithOrgAndGeofence model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetAutomationWithOrgAndGeofence
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSTimesheetAutomationWithOrgAndGeofence</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetAutomationWithOrgAndGeofence
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSTimesheetAutomationWithOrgAndGeofence</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetAutomationWithOrgAndGeofence} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetAutomationWithOrgAndGeofence} The populated <code>CSTimesheetAutomationWithOrgAndGeofence</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('OrgId'))
        obj.orgId = ApiClient.convertToType(data['OrgId'], 'Number');
      if (data.hasOwnProperty('GeofenceName'))
        obj.geofenceName = ApiClient.convertToType(data['GeofenceName'], 'String');
      if (data.hasOwnProperty('Coordinates'))
        obj.coordinates = ApiClient.convertToType(data['Coordinates'], [CSBasicCoordinate]);
      if (data.hasOwnProperty('UserId'))
        obj.userId = ApiClient.convertToType(data['UserId'], 'Number');
      if (data.hasOwnProperty('UserName'))
        obj.userName = ApiClient.convertToType(data['UserName'], 'String');
      if (data.hasOwnProperty('FirstName'))
        obj.firstName = ApiClient.convertToType(data['FirstName'], 'String');
      if (data.hasOwnProperty('LastName'))
        obj.lastName = ApiClient.convertToType(data['LastName'], 'String');
      if (data.hasOwnProperty('AutomationId'))
        obj.automationId = ApiClient.convertToType(data['AutomationId'], 'Number');
      if (data.hasOwnProperty('AutomationActionType'))
        obj.automationActionType = ApiClient.convertToType(data['AutomationActionType'], 'String');
      if (data.hasOwnProperty('Created'))
        obj.created = ApiClient.convertToType(data['Created'], 'Date');
      if (data.hasOwnProperty('Latitude'))
        obj.latitude = ApiClient.convertToType(data['Latitude'], 'Number');
      if (data.hasOwnProperty('Longitude'))
        obj.longitude = ApiClient.convertToType(data['Longitude'], 'Number');
      if (data.hasOwnProperty('IsProcessed'))
        obj.isProcessed = ApiClient.convertToType(data['IsProcessed'], 'Boolean');
      if (data.hasOwnProperty('Expires'))
        obj.expires = ApiClient.convertToType(data['Expires'], 'Date');
      if (data.hasOwnProperty('ClientDateTime'))
        obj.clientDateTime = ApiClient.convertToType(data['ClientDateTime'], 'Date');
    }
    return obj;
  }

  /**
   * @member {Number} orgId
   */
  exports.prototype.orgId = undefined;

  /**
   * @member {String} geofenceName
   */
  exports.prototype.geofenceName = undefined;

  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSBasicCoordinate>} coordinates
   */
  exports.prototype.coordinates = undefined;

  /**
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;

  /**
   * @member {String} userName
   */
  exports.prototype.userName = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * @member {Number} automationId
   */
  exports.prototype.automationId = undefined;

  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetAutomationWithOrgAndGeofence.AutomationActionTypeEnum} automationActionType
   */
  exports.prototype.automationActionType = undefined;

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {Number} latitude
   */
  exports.prototype.latitude = undefined;

  /**
   * @member {Number} longitude
   */
  exports.prototype.longitude = undefined;

  /**
   * @member {Boolean} isProcessed
   */
  exports.prototype.isProcessed = undefined;

  /**
   * @member {Date} expires
   */
  exports.prototype.expires = undefined;

  /**
   * @member {Date} clientDateTime
   */
  exports.prototype.clientDateTime = undefined;


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
