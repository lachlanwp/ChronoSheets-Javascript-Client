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
import BasicCoordinate from './BasicCoordinate';

/**
 * The UpdateGeoFenceRequest model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateGeoFenceRequest
 * @version 1.0.0
 */
class UpdateGeoFenceRequest {
    /**
     * Constructs a new <code>UpdateGeoFenceRequest</code>.
     * A request object for updating a new geofence
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateGeoFenceRequest
     */
    constructor() { 
        
        UpdateGeoFenceRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGeoFenceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateGeoFenceRequest} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateGeoFenceRequest} The populated <code>UpdateGeoFenceRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGeoFenceRequest();

            if (data.hasOwnProperty('GeofenceId')) {
                obj['GeofenceId'] = ApiClient.convertToType(data['GeofenceId'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('FenceCoordinates')) {
                obj['FenceCoordinates'] = ApiClient.convertToType(data['FenceCoordinates'], [BasicCoordinate]);
            }
            if (data.hasOwnProperty('TriggerJobCodeId')) {
                obj['TriggerJobCodeId'] = ApiClient.convertToType(data['TriggerJobCodeId'], 'Number');
            }
            if (data.hasOwnProperty('TriggerTaskId')) {
                obj['TriggerTaskId'] = ApiClient.convertToType(data['TriggerTaskId'], 'Number');
            }
            if (data.hasOwnProperty('SendAlertToOrgGroupId')) {
                obj['SendAlertToOrgGroupId'] = ApiClient.convertToType(data['SendAlertToOrgGroupId'], 'Number');
            }
            if (data.hasOwnProperty('AlertSettings')) {
                obj['AlertSettings'] = ApiClient.convertToType(data['AlertSettings'], 'String');
            }
            if (data.hasOwnProperty('TriggerSettings')) {
                obj['TriggerSettings'] = ApiClient.convertToType(data['TriggerSettings'], 'String');
            }
            if (data.hasOwnProperty('StartTimeHour')) {
                obj['StartTimeHour'] = ApiClient.convertToType(data['StartTimeHour'], 'Number');
            }
            if (data.hasOwnProperty('StartTimeMinute')) {
                obj['StartTimeMinute'] = ApiClient.convertToType(data['StartTimeMinute'], 'Number');
            }
            if (data.hasOwnProperty('EndTimeHour')) {
                obj['EndTimeHour'] = ApiClient.convertToType(data['EndTimeHour'], 'Number');
            }
            if (data.hasOwnProperty('EndTimeMinute')) {
                obj['EndTimeMinute'] = ApiClient.convertToType(data['EndTimeMinute'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The ID of the geofence you want to update
 * @member {Number} GeofenceId
 */
UpdateGeoFenceRequest.prototype['GeofenceId'] = undefined;

/**
 * The name of the geo fence
 * @member {String} Name
 */
UpdateGeoFenceRequest.prototype['Name'] = undefined;

/**
 * A list of coordinates specifying the geofence region
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/BasicCoordinate>} FenceCoordinates
 */
UpdateGeoFenceRequest.prototype['FenceCoordinates'] = undefined;

/**
 * The job code to be used when the person enters/leaves the geofence
 * @member {Number} TriggerJobCodeId
 */
UpdateGeoFenceRequest.prototype['TriggerJobCodeId'] = undefined;

/**
 * The task to be used when the person enters/leaves the geofence
 * @member {Number} TriggerTaskId
 */
UpdateGeoFenceRequest.prototype['TriggerTaskId'] = undefined;

/**
 * Send an alert to a user, specified by their user ID
 * @member {Number} SendAlertToOrgGroupId
 */
UpdateGeoFenceRequest.prototype['SendAlertToOrgGroupId'] = undefined;

/**
 * Define when you want the alerts to be sent
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateGeoFenceRequest.AlertSettingsEnum} AlertSettings
 */
UpdateGeoFenceRequest.prototype['AlertSettings'] = undefined;

/**
 * Define how to you want to trigger the timesheet automation
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/UpdateGeoFenceRequest.TriggerSettingsEnum} TriggerSettings
 */
UpdateGeoFenceRequest.prototype['TriggerSettings'] = undefined;

/**
 * The start hour in which this geofence should apply.  After this time, the geofence will be active.
 * @member {Number} StartTimeHour
 */
UpdateGeoFenceRequest.prototype['StartTimeHour'] = undefined;

/**
 * The start minute in which this geofence should apply.  After this time, the geofence will be active.
 * @member {Number} StartTimeMinute
 */
UpdateGeoFenceRequest.prototype['StartTimeMinute'] = undefined;

/**
 * The end hour in which this geofence will stop applying.  After this time, the geofence will be inactive.
 * @member {Number} EndTimeHour
 */
UpdateGeoFenceRequest.prototype['EndTimeHour'] = undefined;

/**
 * The end minute in which this geofence will stop applying.  After this time, the geofence will be inactive.
 * @member {Number} EndTimeMinute
 */
UpdateGeoFenceRequest.prototype['EndTimeMinute'] = undefined;





/**
 * Allowed values for the <code>AlertSettings</code> property.
 * @enum {String}
 * @readonly
 */
UpdateGeoFenceRequest['AlertSettingsEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "SendWhenEntering"
     * @const
     */
    "SendWhenEntering": "SendWhenEntering",

    /**
     * value: "SendWhenExiting"
     * @const
     */
    "SendWhenExiting": "SendWhenExiting",

    /**
     * value: "SendWhenEnteringOrExiting"
     * @const
     */
    "SendWhenEnteringOrExiting": "SendWhenEnteringOrExiting"
};


/**
 * Allowed values for the <code>TriggerSettings</code> property.
 * @enum {String}
 * @readonly
 */
UpdateGeoFenceRequest['TriggerSettingsEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "StartTimesheetWhenEntering"
     * @const
     */
    "StartTimesheetWhenEntering": "StartTimesheetWhenEntering",

    /**
     * value: "StopTimesheetWhenEntering"
     * @const
     */
    "StopTimesheetWhenEntering": "StopTimesheetWhenEntering",

    /**
     * value: "StartOnEnterStopOnLeave"
     * @const
     */
    "StartOnEnterStopOnLeave": "StartOnEnterStopOnLeave"
};



export default UpdateGeoFenceRequest;

