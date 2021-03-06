/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreContractsTimeWindow model module.
 * @module io.generated.model/NetCordaCoreContractsTimeWindow
 * @version 1.0.0
 */
class NetCordaCoreContractsTimeWindow {
    /**
     * Constructs a new <code>NetCordaCoreContractsTimeWindow</code>.
     * @alias module:io.generated.model/NetCordaCoreContractsTimeWindow
     */
    constructor() { 
        
        NetCordaCoreContractsTimeWindow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetCordaCoreContractsTimeWindow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreContractsTimeWindow} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreContractsTimeWindow} The populated <code>NetCordaCoreContractsTimeWindow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreContractsTimeWindow();

            if (data.hasOwnProperty('fromTime')) {
                obj['fromTime'] = ApiClient.convertToType(data['fromTime'], 'String');
            }
            if (data.hasOwnProperty('untilTime')) {
                obj['untilTime'] = ApiClient.convertToType(data['untilTime'], 'String');
            }
            if (data.hasOwnProperty('midpoint')) {
                obj['midpoint'] = ApiClient.convertToType(data['midpoint'], 'String');
            }
        }
        return obj;
    }


}

/**
 * JSR310 encoded time representation of Instant
 * @member {String} fromTime
 */
NetCordaCoreContractsTimeWindow.prototype['fromTime'] = undefined;

/**
 * JSR310 encoded time representation of Instant
 * @member {String} untilTime
 */
NetCordaCoreContractsTimeWindow.prototype['untilTime'] = undefined;

/**
 * JSR310 encoded time representation of Instant
 * @member {String} midpoint
 */
NetCordaCoreContractsTimeWindow.prototype['midpoint'] = undefined;






export default NetCordaCoreContractsTimeWindow;

