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
    root.ChronoSheetsApi.CSFleetVehicle = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSFleetVehicle model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSFleetVehicle
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSFleetVehicle</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSFleetVehicle
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSFleetVehicle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSFleetVehicle} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSFleetVehicle} The populated <code>CSFleetVehicle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('OrganisationId'))
        obj.organisationId = ApiClient.convertToType(data['OrganisationId'], 'Number');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('CostPerKilometer'))
        obj.costPerKilometer = ApiClient.convertToType(data['CostPerKilometer'], 'Number');
      if (data.hasOwnProperty('Make'))
        obj.make = ApiClient.convertToType(data['Make'], 'String');
      if (data.hasOwnProperty('Model'))
        obj.model = ApiClient.convertToType(data['Model'], 'String');
      if (data.hasOwnProperty('Year'))
        obj.year = ApiClient.convertToType(data['Year'], 'String');
      if (data.hasOwnProperty('LicencePlateNumber'))
        obj.licencePlateNumber = ApiClient.convertToType(data['LicencePlateNumber'], 'String');
      if (data.hasOwnProperty('IsDeleted'))
        obj.isDeleted = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
      if (data.hasOwnProperty('PermittedEmployees'))
        obj.permittedEmployees = ApiClient.convertToType(data['PermittedEmployees'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} organisationId
   */
  exports.prototype.organisationId = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} costPerKilometer
   */
  exports.prototype.costPerKilometer = undefined;

  /**
   * @member {String} make
   */
  exports.prototype.make = undefined;

  /**
   * @member {String} model
   */
  exports.prototype.model = undefined;

  /**
   * @member {String} year
   */
  exports.prototype.year = undefined;

  /**
   * @member {String} licencePlateNumber
   */
  exports.prototype.licencePlateNumber = undefined;

  /**
   * @member {Boolean} isDeleted
   */
  exports.prototype.isDeleted = undefined;

  /**
   * @member {Array.<Number>} permittedEmployees
   */
  exports.prototype.permittedEmployees = undefined;

  return exports;

}));
