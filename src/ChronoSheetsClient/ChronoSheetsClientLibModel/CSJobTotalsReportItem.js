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
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TheChronoSheetsApi) {
      root.TheChronoSheetsApi = {};
    }
    root.TheChronoSheetsApi.CSJobTotalsReportItem = factory(root.TheChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSJobTotalsReportItem model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobTotalsReportItem
   * @version v1
   */

  /**
   * Constructs a new <code>CSJobTotalsReportItem</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobTotalsReportItem
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CSJobTotalsReportItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobTotalsReportItem} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSJobTotalsReportItem} The populated <code>CSJobTotalsReportItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('OrganisationId')) {
        obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
      }
      if (data.hasOwnProperty('JobId')) {
        obj['JobId'] = ApiClient.convertToType(data['JobId'], 'Number');
      }
      if (data.hasOwnProperty('JobCode')) {
        obj['JobCode'] = ApiClient.convertToType(data['JobCode'], 'String');
      }
      if (data.hasOwnProperty('ClientId')) {
        obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'Number');
      }
      if (data.hasOwnProperty('ClientName')) {
        obj['ClientName'] = ApiClient.convertToType(data['ClientName'], 'String');
      }
      if (data.hasOwnProperty('ProjectId')) {
        obj['ProjectId'] = ApiClient.convertToType(data['ProjectId'], 'Number');
      }
      if (data.hasOwnProperty('ProjectName')) {
        obj['ProjectName'] = ApiClient.convertToType(data['ProjectName'], 'String');
      }
      if (data.hasOwnProperty('SpanSeconds')) {
        obj['SpanSeconds'] = ApiClient.convertToType(data['SpanSeconds'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} OrganisationId
   */
  exports.prototype['OrganisationId'] = undefined;
  /**
   * @member {Number} JobId
   */
  exports.prototype['JobId'] = undefined;
  /**
   * @member {String} JobCode
   */
  exports.prototype['JobCode'] = undefined;
  /**
   * @member {Number} ClientId
   */
  exports.prototype['ClientId'] = undefined;
  /**
   * @member {String} ClientName
   */
  exports.prototype['ClientName'] = undefined;
  /**
   * @member {Number} ProjectId
   */
  exports.prototype['ProjectId'] = undefined;
  /**
   * @member {String} ProjectName
   */
  exports.prototype['ProjectName'] = undefined;
  /**
   * @member {Number} SpanSeconds
   */
  exports.prototype['SpanSeconds'] = undefined;



  return exports;
}));


