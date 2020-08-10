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
 * The UserHourlyRate model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/UserHourlyRate
 * @version 1.0.0
 */
class UserHourlyRate {
    /**
     * Constructs a new <code>UserHourlyRate</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/UserHourlyRate
     */
    constructor() { 
        
        UserHourlyRate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserHourlyRate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UserHourlyRate} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UserHourlyRate} The populated <code>UserHourlyRate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserHourlyRate();

            if (data.hasOwnProperty('RateId')) {
                obj['RateId'] = ApiClient.convertToType(data['RateId'], 'Number');
            }
            if (data.hasOwnProperty('UserId')) {
                obj['UserId'] = ApiClient.convertToType(data['UserId'], 'Number');
            }
            if (data.hasOwnProperty('OrganisationId')) {
                obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
            }
            if (data.hasOwnProperty('IsCurrent')) {
                obj['IsCurrent'] = ApiClient.convertToType(data['IsCurrent'], 'Boolean');
            }
            if (data.hasOwnProperty('HourlyRate')) {
                obj['HourlyRate'] = ApiClient.convertToType(data['HourlyRate'], 'Number');
            }
            if (data.hasOwnProperty('HourlyOvertimeRate')) {
                obj['HourlyOvertimeRate'] = ApiClient.convertToType(data['HourlyOvertimeRate'], 'Number');
            }
            if (data.hasOwnProperty('StartDateTime')) {
                obj['StartDateTime'] = ApiClient.convertToType(data['StartDateTime'], 'Date');
            }
            if (data.hasOwnProperty('EndDateTime')) {
                obj['EndDateTime'] = ApiClient.convertToType(data['EndDateTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} RateId
 */
UserHourlyRate.prototype['RateId'] = undefined;

/**
 * @member {Number} UserId
 */
UserHourlyRate.prototype['UserId'] = undefined;

/**
 * @member {Number} OrganisationId
 */
UserHourlyRate.prototype['OrganisationId'] = undefined;

/**
 * @member {Boolean} IsCurrent
 */
UserHourlyRate.prototype['IsCurrent'] = undefined;

/**
 * @member {Number} HourlyRate
 */
UserHourlyRate.prototype['HourlyRate'] = undefined;

/**
 * @member {Number} HourlyOvertimeRate
 */
UserHourlyRate.prototype['HourlyOvertimeRate'] = undefined;

/**
 * @member {Date} StartDateTime
 */
UserHourlyRate.prototype['StartDateTime'] = undefined;

/**
 * @member {Date} EndDateTime
 */
UserHourlyRate.prototype['EndDateTime'] = undefined;






export default UserHourlyRate;
