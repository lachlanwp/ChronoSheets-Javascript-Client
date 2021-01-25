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
import OrganisationPricingPlan from './OrganisationPricingPlan';

/**
 * The Organisation model module.
 * @module ChronoSheetsClient/ChronoSheetsClientLibModel/Organisation
 * @version 1.0.0
 */
class Organisation {
    /**
     * Constructs a new <code>Organisation</code>.
     * An organisation in ChronoSheets
     * @alias module:ChronoSheetsClient/ChronoSheetsClientLibModel/Organisation
     */
    constructor() { 
        
        Organisation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Organisation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Organisation} obj Optional instance to populate.
     * @return {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Organisation} The populated <code>Organisation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Organisation();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'Number');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('AddressLine01')) {
                obj['AddressLine01'] = ApiClient.convertToType(data['AddressLine01'], 'String');
            }
            if (data.hasOwnProperty('AddressLine02')) {
                obj['AddressLine02'] = ApiClient.convertToType(data['AddressLine02'], 'String');
            }
            if (data.hasOwnProperty('Suburb')) {
                obj['Suburb'] = ApiClient.convertToType(data['Suburb'], 'String');
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = ApiClient.convertToType(data['State'], 'String');
            }
            if (data.hasOwnProperty('Postcode')) {
                obj['Postcode'] = ApiClient.convertToType(data['Postcode'], 'String');
            }
            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
            }
            if (data.hasOwnProperty('Phone')) {
                obj['Phone'] = ApiClient.convertToType(data['Phone'], 'String');
            }
            if (data.hasOwnProperty('EmailAddress')) {
                obj['EmailAddress'] = ApiClient.convertToType(data['EmailAddress'], 'String');
            }
            if (data.hasOwnProperty('Timezone')) {
                obj['Timezone'] = ApiClient.convertToType(data['Timezone'], 'String');
            }
            if (data.hasOwnProperty('SubscriptionCustomerId')) {
                obj['SubscriptionCustomerId'] = ApiClient.convertToType(data['SubscriptionCustomerId'], 'String');
            }
            if (data.hasOwnProperty('SignupToken')) {
                obj['SignupToken'] = ApiClient.convertToType(data['SignupToken'], 'String');
            }
            if (data.hasOwnProperty('IsActive')) {
                obj['IsActive'] = ApiClient.convertToType(data['IsActive'], 'Boolean');
            }
            if (data.hasOwnProperty('StripeCouponCode')) {
                obj['StripeCouponCode'] = ApiClient.convertToType(data['StripeCouponCode'], 'String');
            }
            if (data.hasOwnProperty('SubscriptionSource')) {
                obj['SubscriptionSource'] = ApiClient.convertToType(data['SubscriptionSource'], 'String');
            }
            if (data.hasOwnProperty('SignUpSource')) {
                obj['SignUpSource'] = ApiClient.convertToType(data['SignUpSource'], 'String');
            }
            if (data.hasOwnProperty('MobileSignUpCode')) {
                obj['MobileSignUpCode'] = ApiClient.convertToType(data['MobileSignUpCode'], 'String');
            }
            if (data.hasOwnProperty('SubscriptionCycleStart')) {
                obj['SubscriptionCycleStart'] = ApiClient.convertToType(data['SubscriptionCycleStart'], 'Date');
            }
            if (data.hasOwnProperty('SubscriptionCycleEnd')) {
                obj['SubscriptionCycleEnd'] = ApiClient.convertToType(data['SubscriptionCycleEnd'], 'Date');
            }
            if (data.hasOwnProperty('PricingPlans')) {
                obj['PricingPlans'] = ApiClient.convertToType(data['PricingPlans'], [OrganisationPricingPlan]);
            }
        }
        return obj;
    }


}

/**
 * The ID of the organisation
 * @member {Number} Id
 */
Organisation.prototype['Id'] = undefined;

/**
 * The name of the organisation
 * @member {String} Name
 */
Organisation.prototype['Name'] = undefined;

/**
 * Address line 1 of the organisation
 * @member {String} AddressLine01
 */
Organisation.prototype['AddressLine01'] = undefined;

/**
 * Address line 2 of the organisation
 * @member {String} AddressLine02
 */
Organisation.prototype['AddressLine02'] = undefined;

/**
 * The suburb where the organisation is located
 * @member {String} Suburb
 */
Organisation.prototype['Suburb'] = undefined;

/**
 * The state where the organisation is located
 * @member {String} State
 */
Organisation.prototype['State'] = undefined;

/**
 * The postcode of the organisation
 * @member {String} Postcode
 */
Organisation.prototype['Postcode'] = undefined;

/**
 * The country of the organisation
 * @member {String} Country
 */
Organisation.prototype['Country'] = undefined;

/**
 * The primary phone contact number of the organisation
 * @member {String} Phone
 */
Organisation.prototype['Phone'] = undefined;

/**
 * The primary email address of the organisation
 * @member {String} EmailAddress
 */
Organisation.prototype['EmailAddress'] = undefined;

/**
 * The timezone of the organisation
 * @member {String} Timezone
 */
Organisation.prototype['Timezone'] = undefined;

/**
 * The customer ID of the payments subscription
 * @member {String} SubscriptionCustomerId
 */
Organisation.prototype['SubscriptionCustomerId'] = undefined;

/**
 * The sign up token
 * @member {String} SignupToken
 */
Organisation.prototype['SignupToken'] = undefined;

/**
 * Whether or not the organisation is active
 * @member {Boolean} IsActive
 */
Organisation.prototype['IsActive'] = undefined;

/**
 * The payments coupon code
 * @member {String} StripeCouponCode
 */
Organisation.prototype['StripeCouponCode'] = undefined;

/**
 * The source of the subscription
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Organisation.SubscriptionSourceEnum} SubscriptionSource
 */
Organisation.prototype['SubscriptionSource'] = undefined;

/**
 * The source where the organisation signed up
 * @member {module:ChronoSheetsClient/ChronoSheetsClientLibModel/Organisation.SignUpSourceEnum} SignUpSource
 */
Organisation.prototype['SignUpSource'] = undefined;

/**
 * A temporary mobile sign up code
 * @member {String} MobileSignUpCode
 */
Organisation.prototype['MobileSignUpCode'] = undefined;

/**
 * The start date and time of the organisations subscription
 * @member {Date} SubscriptionCycleStart
 */
Organisation.prototype['SubscriptionCycleStart'] = undefined;

/**
 * The end date and time of the organisations subscription
 * @member {Date} SubscriptionCycleEnd
 */
Organisation.prototype['SubscriptionCycleEnd'] = undefined;

/**
 * The organisation's pricing plans
 * @member {Array.<module:ChronoSheetsClient/ChronoSheetsClientLibModel/OrganisationPricingPlan>} PricingPlans
 */
Organisation.prototype['PricingPlans'] = undefined;





/**
 * Allowed values for the <code>SubscriptionSource</code> property.
 * @enum {String}
 * @readonly
 */
Organisation['SubscriptionSourceEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "Stripe"
     * @const
     */
    "Stripe": "Stripe",

    /**
     * value: "AppleInApp"
     * @const
     */
    "AppleInApp": "AppleInApp",

    /**
     * value: "GoogleInApp"
     * @const
     */
    "GoogleInApp": "GoogleInApp"
};


/**
 * Allowed values for the <code>SignUpSource</code> property.
 * @enum {String}
 * @readonly
 */
Organisation['SignUpSourceEnum'] = {

    /**
     * value: "Desktop"
     * @const
     */
    "Desktop": "Desktop",

    /**
     * value: "MobileiOS"
     * @const
     */
    "MobileiOS": "MobileiOS",

    /**
     * value: "MobileAndroid"
     * @const
     */
    "MobileAndroid": "MobileAndroid"
};



export default Organisation;

