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
    define(['ChronoSheetsClient/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ChronoSheetsApi) {
      root.ChronoSheetsApi = {};
    }
    root.ChronoSheetsApi.CSTimesheetFileAttachment = factory(root.ChronoSheetsApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CSTimesheetFileAttachment model module.
   * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment
   * @version v1
   */

  /**
   * Constructs a new <code>CSTimesheetFileAttachment</code>.
   * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment
   * @class
   */
  var exports = function() {
    var _this = this;
























  };

  /**
   * Constructs a <code>CSTimesheetFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment} obj Optional instance to populate.
   * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment} The populated <code>CSTimesheetFileAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TimesheetId')) {
        obj['TimesheetId'] = ApiClient.convertToType(data['TimesheetId'], 'Number');
      }
      if (data.hasOwnProperty('DocumentS3SignedUrl')) {
        obj['DocumentS3SignedUrl'] = ApiClient.convertToType(data['DocumentS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('ImageLargeS3SignedUrl')) {
        obj['ImageLargeS3SignedUrl'] = ApiClient.convertToType(data['ImageLargeS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('ImageMediumS3SignedUrl')) {
        obj['ImageMediumS3SignedUrl'] = ApiClient.convertToType(data['ImageMediumS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('ImageSmallS3SignedUrl')) {
        obj['ImageSmallS3SignedUrl'] = ApiClient.convertToType(data['ImageSmallS3SignedUrl'], 'String');
      }
      if (data.hasOwnProperty('TimesheetStart')) {
        obj['TimesheetStart'] = ApiClient.convertToType(data['TimesheetStart'], 'Date');
      }
      if (data.hasOwnProperty('TimesheetEnd')) {
        obj['TimesheetEnd'] = ApiClient.convertToType(data['TimesheetEnd'], 'Date');
      }
      if (data.hasOwnProperty('FileAttachmentId')) {
        obj['FileAttachmentId'] = ApiClient.convertToType(data['FileAttachmentId'], 'Number');
      }
      if (data.hasOwnProperty('UserId')) {
        obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
      }
      if (data.hasOwnProperty('OrgId')) {
        obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'Number');
      }
      if (data.hasOwnProperty('MobilePlatform')) {
        obj['MobilePlatform'] = ApiClient.convertToType(data['MobilePlatform'], 'String');
      }
      if (data.hasOwnProperty('AttachmentType')) {
        obj['AttachmentType'] = ApiClient.convertToType(data['AttachmentType'], 'String');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], 'String');
      }
      if (data.hasOwnProperty('NonImageFilePath')) {
        obj['NonImageFilePath'] = ApiClient.convertToType(data['NonImageFilePath'], 'String');
      }
      if (data.hasOwnProperty('ImageLargeFilePath')) {
        obj['ImageLargeFilePath'] = ApiClient.convertToType(data['ImageLargeFilePath'], 'String');
      }
      if (data.hasOwnProperty('ImageMediumFilePath')) {
        obj['ImageMediumFilePath'] = ApiClient.convertToType(data['ImageMediumFilePath'], 'String');
      }
      if (data.hasOwnProperty('ImageSmallFilePath')) {
        obj['ImageSmallFilePath'] = ApiClient.convertToType(data['ImageSmallFilePath'], 'String');
      }
      if (data.hasOwnProperty('OriginalFileName')) {
        obj['OriginalFileName'] = ApiClient.convertToType(data['OriginalFileName'], 'String');
      }
      if (data.hasOwnProperty('Latitude')) {
        obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
      }
      if (data.hasOwnProperty('Longitude')) {
        obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
      }
      if (data.hasOwnProperty('DateUploaded')) {
        obj['DateUploaded'] = ApiClient.convertToType(data['DateUploaded'], 'Date');
      }
      if (data.hasOwnProperty('DateImageCaptured')) {
        obj['DateImageCaptured'] = ApiClient.convertToType(data['DateImageCaptured'], 'Date');
      }
      if (data.hasOwnProperty('StorageAllocationBytes')) {
        obj['StorageAllocationBytes'] = ApiClient.convertToType(data['StorageAllocationBytes'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} TimesheetId
   */
  exports.prototype['TimesheetId'] = undefined;
  /**
   * @member {String} DocumentS3SignedUrl
   */
  exports.prototype['DocumentS3SignedUrl'] = undefined;
  /**
   * @member {String} ImageLargeS3SignedUrl
   */
  exports.prototype['ImageLargeS3SignedUrl'] = undefined;
  /**
   * @member {String} ImageMediumS3SignedUrl
   */
  exports.prototype['ImageMediumS3SignedUrl'] = undefined;
  /**
   * @member {String} ImageSmallS3SignedUrl
   */
  exports.prototype['ImageSmallS3SignedUrl'] = undefined;
  /**
   * @member {Date} TimesheetStart
   */
  exports.prototype['TimesheetStart'] = undefined;
  /**
   * @member {Date} TimesheetEnd
   */
  exports.prototype['TimesheetEnd'] = undefined;
  /**
   * @member {Number} FileAttachmentId
   */
  exports.prototype['FileAttachmentId'] = undefined;
  /**
   * @member {Number} UserId
   */
  exports.prototype['UserId'] = undefined;
  /**
   * @member {Number} OrgId
   */
  exports.prototype['OrgId'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment.MobilePlatformEnum} MobilePlatform
   */
  exports.prototype['MobilePlatform'] = undefined;
  /**
   * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CSTimesheetFileAttachment.AttachmentTypeEnum} AttachmentType
   */
  exports.prototype['AttachmentType'] = undefined;
  /**
   * @member {String} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * @member {String} NonImageFilePath
   */
  exports.prototype['NonImageFilePath'] = undefined;
  /**
   * @member {String} ImageLargeFilePath
   */
  exports.prototype['ImageLargeFilePath'] = undefined;
  /**
   * @member {String} ImageMediumFilePath
   */
  exports.prototype['ImageMediumFilePath'] = undefined;
  /**
   * @member {String} ImageSmallFilePath
   */
  exports.prototype['ImageSmallFilePath'] = undefined;
  /**
   * @member {String} OriginalFileName
   */
  exports.prototype['OriginalFileName'] = undefined;
  /**
   * @member {Number} Latitude
   */
  exports.prototype['Latitude'] = undefined;
  /**
   * @member {Number} Longitude
   */
  exports.prototype['Longitude'] = undefined;
  /**
   * @member {Date} DateUploaded
   */
  exports.prototype['DateUploaded'] = undefined;
  /**
   * @member {Date} DateImageCaptured
   */
  exports.prototype['DateImageCaptured'] = undefined;
  /**
   * @member {Number} StorageAllocationBytes
   */
  exports.prototype['StorageAllocationBytes'] = undefined;


  /**
   * Allowed values for the <code>MobilePlatform</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MobilePlatformEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "iOS"
     * @const
     */
    "iOS": "iOS",
    /**
     * value: "Android"
     * @const
     */
    "Android": "Android"  };

  /**
   * Allowed values for the <code>AttachmentType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AttachmentTypeEnum = {
    /**
     * value: "Image"
     * @const
     */
    "Image": "Image",
    /**
     * value: "WordDoc"
     * @const
     */
    "WordDoc": "WordDoc",
    /**
     * value: "Pdf"
     * @const
     */
    "Pdf": "Pdf",
    /**
     * value: "MSSpreadSheet"
     * @const
     */
    "MSSpreadSheet": "MSSpreadSheet",
    /**
     * value: "MSPowerPoint"
     * @const
     */
    "MSPowerPoint": "MSPowerPoint",
    /**
     * value: "RichTextFormat"
     * @const
     */
    "RichTextFormat": "RichTextFormat",
    /**
     * value: "ZipFile"
     * @const
     */
    "ZipFile": "ZipFile",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "Audio"
     * @const
     */
    "Audio": "Audio"  };


  return exports;
}));


