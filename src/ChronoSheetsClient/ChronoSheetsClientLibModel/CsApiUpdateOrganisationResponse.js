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
    root.ChronoSheetsApi.CsApiUpdateOrganisationResponse = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiUpdateOrganisationResponse model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationResponse
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiUpdateOrganisationResponse</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CsApiUpdateOrganisationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationResponse} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateOrganisationResponse} The populated <code>CsApiUpdateOrganisationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ValidationErrors')) {
        obj['ValidationErrors'] = ApiClient.convertToType(data['ValidationErrors'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} ValidationErrors
   */
  exports.prototype['ValidationErrors'] = undefined;



  return exports;
}));


