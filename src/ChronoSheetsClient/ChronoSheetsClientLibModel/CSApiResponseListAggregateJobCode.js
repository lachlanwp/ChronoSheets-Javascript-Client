/**
 * The ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 5 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  </p>  <p>      First Steps:       <ol>          <li>Make sure you've <a href='/HomeV2/App/sign-up'>signed up to ChronoSheets</a> to get yourself a user account</li>          <li>Confirm your account by following the link sent to your email address.  This will activate your account</li>          <li>Use your username and password to obtain an Auth Token by using the DoLogin method inside the UserProfile section below.  Use the Auth Token as an argument to the other methods</li>          <li>Try different methods in the API Playground to learn about the API</li>          <li>If you're stuck, try the full getting started guide on the <a href='/Home/ApiDocs'>API Toolkit</a> page.</li>      </ol>  </p>  <p>      Further Steps:       <ul>          <li>Create a mobile app (iOS, Android or Windows) using one of the ChronoSheets Mobile SDKs</li>          <li>Create a custom integration with your app using one of the ChronoSheets API Client Libraries.</li>      </ul>      Read more about the API Toolkit on the <a href='/Home/ApiDocs'>API Toolkit</a> page.  </p></div>
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
    define(['ChronoSheetsClient/ApiClient', 'ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobCode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CSAggregateJobCode'));
  } else {
    // Browser globals (root is window)
    if (!root.TheChronoSheetsApi) {
      root.TheChronoSheetsApi = {};
    }
    root.TheChronoSheetsApi.CSApiResponseListAggregateJobCode = factory(root.TheChronoSheetsApi.ApiClient, root.TheChronoSheetsApi.CSAggregateJobCode);
  }
}(this, function(ApiClient, CSAggregateJobCode) {
  'use strict';




  /**
   * The CSApiResponseListAggregateJobCode model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListAggregateJobCode
   * @version v1
   */

  /**
   * Constructs a new <code>CSApiResponseListAggregateJobCode</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListAggregateJobCode
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>CSApiResponseListAggregateJobCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListAggregateJobCode} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListAggregateJobCode} The populated <code>CSApiResponseListAggregateJobCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Data')) {
        obj['Data'] = ApiClient.convertToType(data['Data'], [CSAggregateJobCode]);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSAggregateJobCode>} Data
   */
  exports.prototype['Data'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSApiResponseListAggregateJobCode.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Succeeded"
     * @const
     */
    "Succeeded": "Succeeded",
    /**
     * value: "FatalException"
     * @const
     */
    "FatalException": "FatalException",
    /**
     * value: "GeneralError"
     * @const
     */
    "GeneralError": "GeneralError",
    /**
     * value: "ValidationError"
     * @const
     */
    "ValidationError": "ValidationError",
    /**
     * value: "UnAuthorized"
     * @const
     */
    "UnAuthorized": "UnAuthorized",
    /**
     * value: "SessionExpired"
     * @const
     */
    "SessionExpired": "SessionExpired"  };


  return exports;
}));


