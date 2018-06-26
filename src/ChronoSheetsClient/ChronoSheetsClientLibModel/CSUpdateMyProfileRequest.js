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
    root.ChronoSheetsApi.CSUpdateMyProfileRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSUpdateMyProfileRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateMyProfileRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CSUpdateMyProfileRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateMyProfileRequest
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CSUpdateMyProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateMyProfileRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUpdateMyProfileRequest} The populated <code>CSUpdateMyProfileRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('OldPassword')) {
        obj['OldPassword'] = ApiClient.convertToType(data['OldPassword'], 'String');
      }
      if (data.hasOwnProperty('NewPassword')) {
        obj['NewPassword'] = ApiClient.convertToType(data['NewPassword'], 'String');
      }
      if (data.hasOwnProperty('ConfirmNewPassword')) {
        obj['ConfirmNewPassword'] = ApiClient.convertToType(data['ConfirmNewPassword'], 'String');
      }
      if (data.hasOwnProperty('IsSubscribedToNewsletter')) {
        obj['IsSubscribedToNewsletter'] = ApiClient.convertToType(data['IsSubscribedToNewsletter'], 'Boolean');
      }
      if (data.hasOwnProperty('WantsToChangePassword')) {
        obj['WantsToChangePassword'] = ApiClient.convertToType(data['WantsToChangePassword'], 'Boolean');
      }
    }
    return obj;
  }

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
   * @member {String} OldPassword
   */
  exports.prototype['OldPassword'] = undefined;
  /**
   * @member {String} NewPassword
   */
  exports.prototype['NewPassword'] = undefined;
  /**
   * @member {String} ConfirmNewPassword
   */
  exports.prototype['ConfirmNewPassword'] = undefined;
  /**
   * @member {Boolean} IsSubscribedToNewsletter
   */
  exports.prototype['IsSubscribedToNewsletter'] = undefined;
  /**
   * @member {Boolean} WantsToChangePassword
   */
  exports.prototype['WantsToChangePassword'] = undefined;



  return exports;
}));

