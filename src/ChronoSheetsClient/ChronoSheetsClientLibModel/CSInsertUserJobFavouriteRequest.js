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
    root.TheChronoSheetsApi.CSInsertUserJobFavouriteRequest = factory(root.TheChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSInsertUserJobFavouriteRequest model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserJobFavouriteRequest
   * @version v1
   */

  /**
   * Constructs a new <code>CSInsertUserJobFavouriteRequest</code>.
   * Used to mark a JobCode as a Favourite.  Favourites can be used in the Mobile app and on the ChronoSheets website
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserJobFavouriteRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CSInsertUserJobFavouriteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserJobFavouriteRequest} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSInsertUserJobFavouriteRequest} The populated <code>CSInsertUserJobFavouriteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('JobId')) {
        obj['JobId'] = ApiClient.convertToType(data['JobId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The Id of the JobCode that is being marked as a favourite
   * @member {Number} JobId
   */
  exports.prototype['JobId'] = undefined;



  return exports;
}));


