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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSTimesheet'));
  } else {
    // Browser globals (root is window)
    if (!root.JavascriptApiClientForChronoSheets) {
      root.JavascriptApiClientForChronoSheets = {};
    }
    root.JavascriptApiClientForChronoSheets.CSBatchUpdateTimesheetRequest = factory(root.JavascriptApiClientForChronoSheets.ApiClient, root.JavascriptApiClientForChronoSheets.CSTimesheet);
  }
}(this, function(ApiClient, CSTimesheet) {
  'use strict';




  /**
   * The CSBatchUpdateTimesheetRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSBatchUpdateTimesheetRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CSBatchUpdateTimesheetRequest</code>.
   * Contains a collection of Timesheet objects that are to be either created or updated.  If the ID of the timesheet is specified in the Timesheet object, then that Timesheet will be updated otherwise it will be created
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSBatchUpdateTimesheetRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CSBatchUpdateTimesheetRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSBatchUpdateTimesheetRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSBatchUpdateTimesheetRequest} The populated <code>CSBatchUpdateTimesheetRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Timesheets')) {
        obj['Timesheets'] = ApiClient.convertToType(data['Timesheets'], [CSTimesheet]);
      }
    }
    return obj;
  }

  /**
   * A collection of Timesheet objects to be either created or updated
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheet>} Timesheets
   */
  exports.prototype['Timesheets'] = undefined;



  return exports;
}));


