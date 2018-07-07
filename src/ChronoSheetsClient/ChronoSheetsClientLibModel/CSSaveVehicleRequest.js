/**
 * The ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
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
    if (!root.TheChronoSheetsApi) {
      root.TheChronoSheetsApi = {};
    }
    root.TheChronoSheetsApi.CSSaveVehicleRequest = factory(root.TheChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSSaveVehicleRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CSSaveVehicleRequest</code>.
   * Fields for saving an existing Vehicle
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>CSSaveVehicleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSSaveVehicleRequest} The populated <code>CSSaveVehicleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('CostPerKilometer')) {
        obj['CostPerKilometer'] = ApiClient.convertToType(data['CostPerKilometer'], 'Number');
      }
      if (data.hasOwnProperty('Make')) {
        obj['Make'] = ApiClient.convertToType(data['Make'], 'String');
      }
      if (data.hasOwnProperty('Model')) {
        obj['Model'] = ApiClient.convertToType(data['Model'], 'String');
      }
      if (data.hasOwnProperty('Year')) {
        obj['Year'] = ApiClient.convertToType(data['Year'], 'String');
      }
      if (data.hasOwnProperty('LicencePlateNumber')) {
        obj['LicencePlateNumber'] = ApiClient.convertToType(data['LicencePlateNumber'], 'String');
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
   * The Id of the Vehicle that is being updated
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * The Name of the Vehicle
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * The fuel cost / running cost of the Vehicle, measured per kilometer
   * @member {Number} CostPerKilometer
   */
  exports.prototype['CostPerKilometer'] = undefined;
  /**
   * The make of the Vehicle
   * @member {String} Make
   */
  exports.prototype['Make'] = undefined;
  /**
   * The model of the Vehicle
   * @member {String} Model
   */
  exports.prototype['Model'] = undefined;
  /**
   * The year the Vehicle was made
   * @member {String} Year
   */
  exports.prototype['Year'] = undefined;
  /**
   * The Licence Plate Number of the Vehicle
   * @member {String} LicencePlateNumber
   */
  exports.prototype['LicencePlateNumber'] = undefined;
  /**
   * Optionally restrict this Vehicle to only be available to employees within these Organisation Groups
   * @member {Array.<Number>} LinkedOrgGroupIds
   */
  exports.prototype['LinkedOrgGroupIds'] = undefined;
  /**
   * Whether or not this Vehicle is to be marked as deleted
   * @member {Boolean} IsDeleted
   */
  exports.prototype['IsDeleted'] = undefined;



  return exports;
}));


