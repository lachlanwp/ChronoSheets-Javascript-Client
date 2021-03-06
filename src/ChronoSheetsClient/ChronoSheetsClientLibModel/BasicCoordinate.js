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
 * The BasicCoordinate model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/BasicCoordinate
 * @version 1.0.0
 */
class BasicCoordinate {
    /**
     * Constructs a new <code>BasicCoordinate</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/BasicCoordinate
     */
    constructor() { 
        
        BasicCoordinate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasicCoordinate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/BasicCoordinate} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/BasicCoordinate} The populated <code>BasicCoordinate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasicCoordinate();

            if (data.hasOwnProperty('Latitude')) {
                obj['Latitude'] = ApiClient.convertToType(data['Latitude'], 'Number');
            }
            if (data.hasOwnProperty('Longitude')) {
                obj['Longitude'] = ApiClient.convertToType(data['Longitude'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} Latitude
 */
BasicCoordinate.prototype['Latitude'] = undefined;

/**
 * @member {Number} Longitude
 */
BasicCoordinate.prototype['Longitude'] = undefined;






export default BasicCoordinate;

