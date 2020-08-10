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
import Organisation from './Organisation';

/**
 * The ClientSideUser model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/ClientSideUser
 * @version 1.0.0
 */
class ClientSideUser {
    /**
     * Constructs a new <code>ClientSideUser</code>.
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/ClientSideUser
     */
    constructor() { 
        
        ClientSideUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClientSideUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ClientSideUser} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/ClientSideUser} The populated <code>ClientSideUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClientSideUser();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('OrganisationId')) {
                obj['OrganisationId'] = ApiClient.convertToType(data['OrganisationId'], 'Number');
            }
            if (data.hasOwnProperty('UserName')) {
                obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
            }
            if (data.hasOwnProperty('FirstName')) {
                obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
            }
            if (data.hasOwnProperty('LastName')) {
                obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
            }
            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
            if (data.hasOwnProperty('Roles')) {
                obj['Roles'] = ApiClient.convertToType(data['Roles'], 'Number');
            }
            if (data.hasOwnProperty('AlertSettings')) {
                obj['AlertSettings'] = ApiClient.convertToType(data['AlertSettings'], 'Number');
            }
            if (data.hasOwnProperty('SetupWizardRequired')) {
                obj['SetupWizardRequired'] = ApiClient.convertToType(data['SetupWizardRequired'], 'Boolean');
            }
            if (data.hasOwnProperty('IsSubscribedToNewsletter')) {
                obj['IsSubscribedToNewsletter'] = ApiClient.convertToType(data['IsSubscribedToNewsletter'], 'Boolean');
            }
            if (data.hasOwnProperty('Organisation')) {
                obj['Organisation'] = Organisation.constructFromObject(data['Organisation']);
            }
            if (data.hasOwnProperty('IsPrimaryAccount')) {
                obj['IsPrimaryAccount'] = ApiClient.convertToType(data['IsPrimaryAccount'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} Id
 */
ClientSideUser.prototype['Id'] = undefined;

/**
 * @member {Number} OrganisationId
 */
ClientSideUser.prototype['OrganisationId'] = undefined;

/**
 * @member {String} UserName
 */
ClientSideUser.prototype['UserName'] = undefined;

/**
 * @member {String} FirstName
 */
ClientSideUser.prototype['FirstName'] = undefined;

/**
 * @member {String} LastName
 */
ClientSideUser.prototype['LastName'] = undefined;

/**
 * @member {String} EmailAddress
 */
ClientSideUser.prototype['EmailAddress'] = undefined;

/**
 * @member {Number} Roles
 */
ClientSideUser.prototype['Roles'] = undefined;

/**
 * @member {Number} AlertSettings
 */
ClientSideUser.prototype['AlertSettings'] = undefined;

/**
 * @member {Boolean} SetupWizardRequired
 */
ClientSideUser.prototype['SetupWizardRequired'] = undefined;

/**
 * @member {Boolean} IsSubscribedToNewsletter
 */
ClientSideUser.prototype['IsSubscribedToNewsletter'] = undefined;

/**
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Organisation} Organisation
 */
ClientSideUser.prototype['Organisation'] = undefined;

/**
 * @member {Boolean} IsPrimaryAccount
 */
ClientSideUser.prototype['IsPrimaryAccount'] = undefined;






export default ClientSideUser;
