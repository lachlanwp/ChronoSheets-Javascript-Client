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
    root.ChronoSheetsApi.CsApiUpdateOrganisationRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiUpdateOrganisationRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiUpdateOrganisationRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationRequest
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CsApiUpdateOrganisationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationRequest} The populated <code>CsApiUpdateOrganisationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OrgansationId')) {
        obj['OrgansationId'] = ApiClient.convertToType(data['OrgansationId'], 'Number');
      }
      if (data.hasOwnProperty('OrganisationName')) {
        obj['OrganisationName'] = ApiClient.convertToType(data['OrganisationName'], 'String');
      }
      if (data.hasOwnProperty('AddressLine01')) {
        obj['AddressLine01'] = ApiClient.convertToType(data['AddressLine01'], 'String');
      }
      if (data.hasOwnProperty('AddressLine02')) {
        obj['AddressLine02'] = ApiClient.convertToType(data['AddressLine02'], 'String');
      }
      if (data.hasOwnProperty('OrganisationSuburb')) {
        obj['OrganisationSuburb'] = ApiClient.convertToType(data['OrganisationSuburb'], 'String');
      }
      if (data.hasOwnProperty('OrganisationState')) {
        obj['OrganisationState'] = ApiClient.convertToType(data['OrganisationState'], 'String');
      }
      if (data.hasOwnProperty('OrganisationPostcode')) {
        obj['OrganisationPostcode'] = ApiClient.convertToType(data['OrganisationPostcode'], 'String');
      }
      if (data.hasOwnProperty('OrganisationCountry')) {
        obj['OrganisationCountry'] = ApiClient.convertToType(data['OrganisationCountry'], 'String');
      }
      if (data.hasOwnProperty('OrganisationPhone')) {
        obj['OrganisationPhone'] = ApiClient.convertToType(data['OrganisationPhone'], 'String');
      }
      if (data.hasOwnProperty('OrganisationEmailAddress')) {
        obj['OrganisationEmailAddress'] = ApiClient.convertToType(data['OrganisationEmailAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} OrgansationId
   */
  exports.prototype['OrgansationId'] = undefined;
  /**
   * @member {String} OrganisationName
   */
  exports.prototype['OrganisationName'] = undefined;
  /**
   * @member {String} AddressLine01
   */
  exports.prototype['AddressLine01'] = undefined;
  /**
   * @member {String} AddressLine02
   */
  exports.prototype['AddressLine02'] = undefined;
  /**
   * @member {String} OrganisationSuburb
   */
  exports.prototype['OrganisationSuburb'] = undefined;
  /**
   * @member {String} OrganisationState
   */
  exports.prototype['OrganisationState'] = undefined;
  /**
   * @member {String} OrganisationPostcode
   */
  exports.prototype['OrganisationPostcode'] = undefined;
  /**
   * @member {String} OrganisationCountry
   */
  exports.prototype['OrganisationCountry'] = undefined;
  /**
   * @member {String} OrganisationPhone
   */
  exports.prototype['OrganisationPhone'] = undefined;
  /**
   * @member {String} OrganisationEmailAddress
   */
  exports.prototype['OrganisationEmailAddress'] = undefined;



  return exports;
}));


