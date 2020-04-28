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
    root.ChronoSheetsApi.CSUserProfile = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CSUserProfile model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserProfile
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSUserProfile</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserProfile
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>CSUserProfile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserProfile} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSUserProfile} The populated <code>CSUserProfile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('OrganisationId'))
        obj.organisationId = ApiClient.convertToType(data['OrganisationId'], 'Number');
      if (data.hasOwnProperty('UserName'))
        obj.userName = ApiClient.convertToType(data['UserName'], 'String');
      if (data.hasOwnProperty('FirstName'))
        obj.firstName = ApiClient.convertToType(data['FirstName'], 'String');
      if (data.hasOwnProperty('LastName'))
        obj.lastName = ApiClient.convertToType(data['LastName'], 'String');
      if (data.hasOwnProperty('EmailAddress'))
        obj.emailAddress = ApiClient.convertToType(data['EmailAddress'], 'String');
      if (data.hasOwnProperty('IsSubscribedToNewsletter'))
        obj.isSubscribedToNewsletter = ApiClient.convertToType(data['IsSubscribedToNewsletter'], 'Boolean');
      if (data.hasOwnProperty('Roles'))
        obj.roles = ApiClient.convertToType(data['Roles'], 'Number');
      if (data.hasOwnProperty('AlertSettings'))
        obj.alertSettings = ApiClient.convertToType(data['AlertSettings'], 'Number');
      if (data.hasOwnProperty('OrganisationName'))
        obj.organisationName = ApiClient.convertToType(data['OrganisationName'], 'String');
      if (data.hasOwnProperty('OrganisationSuburb'))
        obj.organisationSuburb = ApiClient.convertToType(data['OrganisationSuburb'], 'String');
      if (data.hasOwnProperty('OrganisationCountry'))
        obj.organisationCountry = ApiClient.convertToType(data['OrganisationCountry'], 'String');
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
   * @member {String} emailAddress
   */
  exports.prototype.emailAddress = undefined;

  /**
   * @member {Boolean} isSubscribedToNewsletter
   */
  exports.prototype.isSubscribedToNewsletter = undefined;

  /**
   * @member {Number} roles
   */
  exports.prototype.roles = undefined;

  /**
   * @member {Number} alertSettings
   */
  exports.prototype.alertSettings = undefined;

  /**
   * @member {String} organisationName
   */
  exports.prototype.organisationName = undefined;

  /**
   * @member {String} organisationSuburb
   */
  exports.prototype.organisationSuburb = undefined;

  /**
   * @member {String} organisationCountry
   */
  exports.prototype.organisationCountry = undefined;

  return exports;

}));
