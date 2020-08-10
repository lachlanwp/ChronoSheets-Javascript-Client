/**
 * ChronoSheets API
 * <div style='font-size: 14px!important;font-family: Open Sans,sans-serif!important;color: #3b4151!important;'><p>      ChronoSheets is a flexible timesheet solution for small to medium businesses, it is free for small teams of up to 3 and there are iOS and Android apps available.  Use the ChronoSheets API to create your own custom integrations.  Before starting, sign up for a ChronoSheets account at <a target='_BLANK' href='http://tsheets.xyz/signup'>http://tsheets.xyz/signup</a>.  </p></div><div id='cs-extra-info'></div>
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Transcription model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/Transcription
 * @version 1.0.0
 */
class Transcription {
    /**
     * Constructs a new <code>Transcription</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/Transcription
     */
    constructor() { 
        
        Transcription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Transcription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Transcription} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Transcription} The populated <code>Transcription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Transcription();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('OrgId')) {
                obj['OrgId'] = ApiClient.convertToType(data['OrgId'], 'Number');
            }
            if (data.hasOwnProperty('FileAttachmentId')) {
                obj['FileAttachmentId'] = ApiClient.convertToType(data['FileAttachmentId'], 'Number');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'Date');
            }
            if (data.hasOwnProperty('Status')) {
                obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
            }
            if (data.hasOwnProperty('MediaType')) {
                obj['MediaType'] = ApiClient.convertToType(data['MediaType'], 'String');
            }
            if (data.hasOwnProperty('Contents')) {
                obj['Contents'] = ApiClient.convertToType(data['Contents'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} Id
 */
Transcription.prototype['Id'] = undefined;

/**
 * @member {Number} OrgId
 */
Transcription.prototype['OrgId'] = undefined;

/**
 * @member {Number} FileAttachmentId
 */
Transcription.prototype['FileAttachmentId'] = undefined;

/**
 * @member {Date} Created
 */
Transcription.prototype['Created'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Transcription.StatusEnum} Status
 */
Transcription.prototype['Status'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Transcription.MediaTypeEnum} MediaType
 */
Transcription.prototype['MediaType'] = undefined;

/**
 * @member {String} Contents
 */
Transcription.prototype['Contents'] = undefined;





/**
 * Allowed values for the <code>Status</code> property.
 * @enum {String}
 * @readonly
 */
Transcription['StatusEnum'] = {

    /**
     * value: "Saved"
     * @const
     */
    "Saved": "Saved",

    /**
     * value: "Processing"
     * @const
     */
    "Processing": "Processing",

    /**
     * value: "Completed"
     * @const
     */
    "Completed": "Completed",

    /**
     * value: "FailedWithError"
     * @const
     */
    "FailedWithError": "FailedWithError"
};


/**
 * Allowed values for the <code>MediaType</code> property.
 * @enum {String}
 * @readonly
 */
Transcription['MediaTypeEnum'] = {

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",

    /**
     * value: "Mp3"
     * @const
     */
    "Mp3": "Mp3",

    /**
     * value: "Mp4"
     * @const
     */
    "Mp4": "Mp4",

    /**
     * value: "Wav"
     * @const
     */
    "Wav": "Wav",

    /**
     * value: "Flac"
     * @const
     */
    "Flac": "Flac"
};



export default Transcription;
