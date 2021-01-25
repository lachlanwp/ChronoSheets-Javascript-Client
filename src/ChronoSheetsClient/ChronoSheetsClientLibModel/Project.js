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
 * The Project model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/Project
 * @version 1.0.0
 */
class Project {
    /**
     * Constructs a new <code>Project</code>.
     * A project in ChronoSheets
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/Project
     */
    constructor() { 
        
        Project.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Project} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Project} The populated <code>Project</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Project();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('ClientId')) {
                obj['ClientId'] = ApiClient.convertToType(data['ClientId'], 'Number');
            }
            if (data.hasOwnProperty('OrganisationId')) {
                obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
            }
            if (data.hasOwnProperty('ProjectName')) {
                obj['ProjectName'] = ApiClient.convertToType(data['ProjectName'], 'String');
            }
            if (data.hasOwnProperty('CostEstimation')) {
                obj['CostEstimation'] = ApiClient.convertToType(data['CostEstimation'], 'Number');
            }
            if (data.hasOwnProperty('CostActual')) {
                obj['CostActual'] = ApiClient.convertToType(data['CostActual'], 'Number');
            }
            if (data.hasOwnProperty('StartDate')) {
                obj['StartDate'] = ApiClient.convertToType(data['StartDate'], 'Date');
            }
            if (data.hasOwnProperty('EndDate')) {
                obj['EndDate'] = ApiClient.convertToType(data['EndDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The ID of the project
 * @member {Number} Id
 */
Project.prototype['Id'] = undefined;

/**
 * The ID of the client for which the project is being undertaken for
 * @member {Number} ClientId
 */
Project.prototype['ClientId'] = undefined;

/**
 * The ID of the organisation that is completing the project
 * @member {Number} OrganisationId
 */
Project.prototype['OrganisationId'] = undefined;

/**
 * A descriptive name of the project
 * @member {String} ProjectName
 */
Project.prototype['ProjectName'] = undefined;

/**
 * The project's estimated cost
 * @member {Number} CostEstimation
 */
Project.prototype['CostEstimation'] = undefined;

/**
 * The project's actual cost
 * @member {Number} CostActual
 */
Project.prototype['CostActual'] = undefined;

/**
 * The start date and time of the project
 * @member {Date} StartDate
 */
Project.prototype['StartDate'] = undefined;

/**
 * The end date and time of the project
 * @member {Date} EndDate
 */
Project.prototype['EndDate'] = undefined;






export default Project;

