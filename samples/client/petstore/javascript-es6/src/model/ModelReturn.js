/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
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
 * The ModelReturn model module.
 * @module model/ModelReturn
 * @version 1.0.0
 */
class ModelReturn {
    /**
     * Constructs a new <code>ModelReturn</code>.
     * Model for testing reserved words
     * @alias module:model/ModelReturn
     */
    constructor() { 
        
        ModelReturn.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelReturn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelReturn} obj Optional instance to populate.
     * @return {module:model/ModelReturn} The populated <code>ModelReturn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelReturn();

            if (data.hasOwnProperty('return')) {
                obj['return'] = ApiClient.convertToType(data['return'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} return
 */
ModelReturn.prototype['return'] = undefined;






export default ModelReturn;

