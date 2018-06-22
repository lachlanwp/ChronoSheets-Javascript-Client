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
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CsApiUpdateJobCodeRequest = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CsApiUpdateJobCodeRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateJobCodeRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CsApiUpdateJobCodeRequest</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateJobCodeRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CsApiUpdateJobCodeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateJobCodeRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CsApiUpdateJobCodeRequest} The populated <code>CsApiUpdateJobCodeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('ProjectId')) {
        obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'Number');
      }
      if (data.hasOwnProperty('ClientId')) {
        obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'Number');
      }
      if (data.hasOwnProperty('LinkedTaskIds')) {
        obj['LinkedTaskIds'] = ApiClient.convertToType(data['LinkedTaskIds'], ['Number']);
      }
      if (data.hasOwnProperty('LinkedOrgGroupIds')) {
        obj['LinkedOrgGroupIds'] = ApiClient.convertToType(data['LinkedOrgGroupIds'], ['Number']);
      }
      if (data.hasOwnProperty('IsDeleted')) {
        obj['IsDeleted'] = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {Number} ProjectId
   */
  exports.prototype['ProjectId'] = undefined;
  /**
   * @member {Number} ClientId
   */
  exports.prototype['ClientId'] = undefined;
  /**
   * @member {Array.<Number>} LinkedTaskIds
   */
  exports.prototype['LinkedTaskIds'] = undefined;
  /**
   * @member {Array.<Number>} LinkedOrgGroupIds
   */
  exports.prototype['LinkedOrgGroupIds'] = undefined;
  /**
   * @member {Boolean} IsDeleted
   */
  exports.prototype['IsDeleted'] = undefined;



  return exports;
}));


