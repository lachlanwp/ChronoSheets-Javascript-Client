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
    root.ChronoSheetsApi.CsApiClient = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiClient model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiClient
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiClient</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiClient
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>CsApiClient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiClient} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiClient} The populated <code>CsApiClient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('OrganisationId')) {
        obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
      }
      if (data.hasOwnProperty('ClientName')) {
        obj['ClientName'] = ApiClient.convertToType(data['ClientName'], 'String');
      }
      if (data.hasOwnProperty('ClientAddressLine1')) {
        obj['ClientAddressLine1'] = ApiClient.convertToType(data['ClientAddressLine1'], 'String');
      }
      if (data.hasOwnProperty('ClientAddressLine2')) {
        obj['ClientAddressLine2'] = ApiClient.convertToType(data['ClientAddressLine2'], 'String');
      }
      if (data.hasOwnProperty('ClientSuburb')) {
        obj['ClientSuburb'] = ApiClient.convertToType(data['ClientSuburb'], 'String');
      }
      if (data.hasOwnProperty('ClientState')) {
        obj['ClientState'] = ApiClient.convertToType(data['ClientState'], 'String');
      }
      if (data.hasOwnProperty('ClientPostCode')) {
        obj['ClientPostCode'] = ApiClient.convertToType(data['ClientPostCode'], 'String');
      }
      if (data.hasOwnProperty('PersonOfContact')) {
        obj['PersonOfContact'] = ApiClient.convertToType(data['PersonOfContact'], 'String');
      }
      if (data.hasOwnProperty('ClientPhoneNumber')) {
        obj['ClientPhoneNumber'] = ApiClient.convertToType(data['ClientPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('ClientMobileNumber')) {
        obj['ClientMobileNumber'] = ApiClient.convertToType(data['ClientMobileNumber'], 'String');
      }
      if (data.hasOwnProperty('ClientEmailAddress')) {
        obj['ClientEmailAddress'] = ApiClient.convertToType(data['ClientEmailAddress'], 'String');
      }
      if (data.hasOwnProperty('ClientWebURL')) {
        obj['ClientWebURL'] = ApiClient.convertToType(data['ClientWebURL'], 'String');
      }
      if (data.hasOwnProperty('ProjectCount')) {
        obj['ProjectCount'] = ApiClient.convertToType(data['ProjectCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {Number} OrganisationId
   */
  exports.prototype['OrganisationId'] = undefined;
  /**
   * @member {String} ClientName
   */
  exports.prototype['ClientName'] = undefined;
  /**
   * @member {String} ClientAddressLine1
   */
  exports.prototype['ClientAddressLine1'] = undefined;
  /**
   * @member {String} ClientAddressLine2
   */
  exports.prototype['ClientAddressLine2'] = undefined;
  /**
   * @member {String} ClientSuburb
   */
  exports.prototype['ClientSuburb'] = undefined;
  /**
   * @member {String} ClientState
   */
  exports.prototype['ClientState'] = undefined;
  /**
   * @member {String} ClientPostCode
   */
  exports.prototype['ClientPostCode'] = undefined;
  /**
   * @member {String} PersonOfContact
   */
  exports.prototype['PersonOfContact'] = undefined;
  /**
   * @member {String} ClientPhoneNumber
   */
  exports.prototype['ClientPhoneNumber'] = undefined;
  /**
   * @member {String} ClientMobileNumber
   */
  exports.prototype['ClientMobileNumber'] = undefined;
  /**
   * @member {String} ClientEmailAddress
   */
  exports.prototype['ClientEmailAddress'] = undefined;
  /**
   * @member {String} ClientWebURL
   */
  exports.prototype['ClientWebURL'] = undefined;
  /**
   * @member {Number} ProjectCount
   */
  exports.prototype['ProjectCount'] = undefined;



  return exports;
}));


