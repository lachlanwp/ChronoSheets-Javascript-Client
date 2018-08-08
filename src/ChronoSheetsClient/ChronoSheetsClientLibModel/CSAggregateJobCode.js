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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobTask'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSAggregateJobTask'));
  } else {
    // Browser globals (root is window)
    if (!root.JavascriptApiClientForChronoSheets) {
      root.JavascriptApiClientForChronoSheets = {};
    }
    root.JavascriptApiClientForChronoSheets.CSAggregateJobCode = factory(root.JavascriptApiClientForChronoSheets.ApiClient, root.JavascriptApiClientForChronoSheets.CSAggregateJobTask);
  }
}(this, function(ApiClient, CSAggregateJobTask) {
  'use strict';




  /**
   * The CSAggregateJobCode model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobCode
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSAggregateJobCode</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobCode
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>CSAggregateJobCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobCode} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobCode} The populated <code>CSAggregateJobCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AvailableTasks')) {
        obj['AvailableTasks'] = ApiClient.convertToType(data['AvailableTasks'], [CSAggregateJobTask]);
      }
      if (data.hasOwnProperty('PermittedEmployees')) {
        obj['PermittedEmployees'] = ApiClient.convertToType(data['PermittedEmployees'], ['Number']);
      }
      if (data.hasOwnProperty('Id')) {
        obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
      }
      if (data.hasOwnProperty('Code')) {
        obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Client')) {
        obj['Client'] = ApiClient.convertToType(data['Client'], 'String');
      }
      if (data.hasOwnProperty('ClientId')) {
        obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'Number');
      }
      if (data.hasOwnProperty('Project')) {
        obj['Project'] = ApiClient.convertToType(data['Project'], 'String');
      }
      if (data.hasOwnProperty('ProjectId')) {
        obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'Number');
      }
      if (data.hasOwnProperty('OrganisationId')) {
        obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
      }
      if (data.hasOwnProperty('IsDeleted')) {
        obj['IsDeleted'] = ApiClient.convertToType(data['IsDeleted'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobTask>} AvailableTasks
   */
  exports.prototype['AvailableTasks'] = undefined;
  /**
   * @member {Array.<Number>} PermittedEmployees
   */
  exports.prototype['PermittedEmployees'] = undefined;
  /**
   * @member {Number} Id
   */
  exports.prototype['Id'] = undefined;
  /**
   * @member {String} Code
   */
  exports.prototype['Code'] = undefined;
  /**
   * @member {String} Client
   */
  exports.prototype['Client'] = undefined;
  /**
   * @member {Number} ClientId
   */
  exports.prototype['ClientId'] = undefined;
  /**
   * @member {String} Project
   */
  exports.prototype['Project'] = undefined;
  /**
   * @member {Number} ProjectId
   */
  exports.prototype['ProjectId'] = undefined;
  /**
   * @member {Number} OrganisationId
   */
  exports.prototype['OrganisationId'] = undefined;
  /**
   * @member {Boolean} IsDeleted
   */
  exports.prototype['IsDeleted'] = undefined;



  return exports;
}));


