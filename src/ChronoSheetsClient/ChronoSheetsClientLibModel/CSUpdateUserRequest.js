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
    root.ChronoSheetsApi.CSUpdateUserRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSUpdateUserRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateUserRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSUpdateUserRequest</code>.
   * Fields for updating an employee User Account
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateUserRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSUpdateUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateUserRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateUserRequest} The populated <code>CSUpdateUserRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('UserId'))
        obj.userId = ApiClient.convertToType(data['UserId'], 'Number');
      if (data.hasOwnProperty('EmailAddress'))
        obj.emailAddress = ApiClient.convertToType(data['EmailAddress'], 'String');
      if (data.hasOwnProperty('FirstName'))
        obj.firstName = ApiClient.convertToType(data['FirstName'], 'String');
      if (data.hasOwnProperty('LastName'))
        obj.lastName = ApiClient.convertToType(data['LastName'], 'String');
      if (data.hasOwnProperty('IsSubscribedToNewsletter'))
        obj.isSubscribedToNewsletter = ApiClient.convertToType(data['IsSubscribedToNewsletter'], 'Boolean');
      if (data.hasOwnProperty('IsAccountActive'))
        obj.isAccountActive = ApiClient.convertToType(data['IsAccountActive'], 'Boolean');
      if (data.hasOwnProperty('Roles'))
        obj.roles = ApiClient.convertToType(data['Roles'], 'Number');
      if (data.hasOwnProperty('AlertSettings'))
        obj.alertSettings = ApiClient.convertToType(data['AlertSettings'], 'Number');
    }
    return obj;
  }

  /**
   * The Id of the User that is to be updated
   * @member {Number} userId
   */
  exports.prototype.userId = undefined;

  /**
   * The Email Address of the employee
   * @member {String} emailAddress
   */
  exports.prototype.emailAddress = undefined;

  /**
   * The First Name of the employee
   * @member {String} firstName
   */
  exports.prototype.firstName = undefined;

  /**
   * The Last Name of the employee
   * @member {String} lastName
   */
  exports.prototype.lastName = undefined;

  /**
   * Whether or not the employee is subscribed to ChronoSheets newsletters
   * @member {Boolean} isSubscribedToNewsletter
   */
  exports.prototype.isSubscribedToNewsletter = undefined;

  /**
   * Whether or not the employee account is active
   * @member {Boolean} isAccountActive
   */
  exports.prototype.isAccountActive = undefined;

  /**
   * A BIT field designating which Roles/Permissions the employee will have when they sign in.  See the {timesheets.types.Enums.UserRoles} Enum for more details
   * @member {Number} roles
   */
  exports.prototype.roles = undefined;

  /**
   * A BIT field designating which Alerts the employee will receive.  See the {timesheets.types.Enums.AlertSettings} Enum for more details
   * @member {Number} alertSettings
   */
  exports.prototype.alertSettings = undefined;

  return exports;

}));
