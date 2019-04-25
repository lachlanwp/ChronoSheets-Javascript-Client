/**
 * ChronoSheets API
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSOrganisation'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSUserForManagement = factory(root.ChronoSheetsApi.ApiClient, root.ChronoSheetsApi.CSOrganisation);
  }
}(this, function(ApiClient, CSOrganisation) {
  'use strict';




  /**
   * The CSUserForManagement model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserForManagement
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSUserForManagement</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserForManagement
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>CSUserForManagement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserForManagement} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserForManagement} The populated <code>CSUserForManagement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IsAccountActive')) {
        obj['IsAccountActive'] = ApiClient.convertToType(data['IsAccountActive'], 'Boolean');
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('OrganisationId')) {
        obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
      }
      if (data.hasOwnProperty('UserName')) {
        obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('EmailAddress')) {
        obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
      }
      if (data.hasOwnProperty('Roles')) {
        obj['Roles'] = ApiClient.convertToType(data['Roles'], 'Number');
      }
      if (data.hasOwnProperty('AlertSettings')) {
        obj['AlertSettings'] = ApiClient.convertToType(data['AlertSettings'], 'Number');
      }
      if (data.hasOwnProperty('SetupWizardRequired')) {
        obj['SetupWizardRequired'] = ApiClient.convertToType(data['SetupWizardRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('IsSubscribedToNewsletter')) {
        obj['IsSubscribedToNewsletter'] = ApiClient.convertToType(data['IsSubscribedToNewsletter'], 'Boolean');
      }
      if (data.hasOwnProperty('Organisation')) {
        obj['Organisation'] = CSOrganisation.constructFromObject(data['Organisation']);
      }
      if (data.hasOwnProperty('IsPrimaryAccount')) {
        obj['IsPrimaryAccount'] = ApiClient.convertToType(data['IsPrimaryAccount'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} IsAccountActive
   */
  exports.prototype['IsAccountActive'] = undefined;
  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {Number} OrganisationId
   */
  exports.prototype['OrganisationId'] = undefined;
  /**
   * @member {String} UserName
   */
  exports.prototype['UserName'] = undefined;
  /**
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * @member {String} EmailAddress
   */
  exports.prototype['EmailAddress'] = undefined;
  /**
   * @member {Number} Roles
   */
  exports.prototype['Roles'] = undefined;
  /**
   * @member {Number} AlertSettings
   */
  exports.prototype['AlertSettings'] = undefined;
  /**
   * @member {Boolean} SetupWizardRequired
   */
  exports.prototype['SetupWizardRequired'] = undefined;
  /**
   * @member {Boolean} IsSubscribedToNewsletter
   */
  exports.prototype['IsSubscribedToNewsletter'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSOrganisation} Organisation
   */
  exports.prototype['Organisation'] = undefined;
  /**
   * @member {Boolean} IsPrimaryAccount
   */
  exports.prototype['IsPrimaryAccount'] = undefined;



  return exports;
}));


