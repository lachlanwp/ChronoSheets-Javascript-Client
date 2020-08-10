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
 * The CreateTripRequest model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/CreateTripRequest
 * @version 1.0.0
 */
class CreateTripRequest {
    /**
     * Constructs a new <code>CreateTripRequest</code>.
     * Contains fields for creating a Trip
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/CreateTripRequest
     */
    constructor() { 
        
        CreateTripRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateTripRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CreateTripRequest} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CreateTripRequest} The populated <code>CreateTripRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateTripRequest();

            if (data.hasOwnProperty('TimesheetId')) {
                obj['TimesheetId'] = ApiClient.convertToType(data['TimesheetId'], 'Number');
            }
            if (data.hasOwnProperty('VehicleId')) {
                obj['VehicleId'] = ApiClient.convertToType(data['VehicleId'], 'Number');
            }
            if (data.hasOwnProperty('PathCoordsStringCsv')) {
                obj['PathCoordsStringCsv'] = ApiClient.convertToType(data['PathCoordsStringCsv'], 'String');
            }
            if (data.hasOwnProperty('DistanceMeters')) {
                obj['DistanceMeters'] = ApiClient.convertToType(data['DistanceMeters'], 'Number');
            }
            if (data.hasOwnProperty('MobilePlatform')) {
                obj['MobilePlatform'] = ApiClient.convertToType(data['MobilePlatform'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The associated Timesheet record Id.  The Trip will be linked to the Timesheet with this TimesheetId
 * @member {Number} TimesheetId
 */
CreateTripRequest.prototype['TimesheetId'] = undefined;

/**
 * The associated Vehicle Id.  The Trip will show that this Vehicle was used
 * @member {Number} VehicleId
 */
CreateTripRequest.prototype['VehicleId'] = undefined;

/**
 * A CSV of GPS path co-ordinates.  Format example: -37.8433562,144.7226188;[Lat1],[Long1];........[LatN],[LongN]
 * @member {String} PathCoordsStringCsv
 */
CreateTripRequest.prototype['PathCoordsStringCsv'] = undefined;

/**
 * The total distance of the Trip
 * @member {Number} DistanceMeters
 */
CreateTripRequest.prototype['DistanceMeters'] = undefined;

/**
 * The Mobile platform that the Trip was recorded on
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/CreateTripRequest.MobilePlatformEnum} MobilePlatform
 */
CreateTripRequest.prototype['MobilePlatform'] = undefined;





/**
 * Allowed values for the <code>MobilePlatform</code> property.
 * @enum {String}
 * @readonly
 */
CreateTripRequest['MobilePlatformEnum'] = {

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
    "Android": "Android"
};



export default CreateTripRequest;
