/**
 * UnifonicNextGenLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SendScheduledmessagesResponse
 */
class SendScheduledmessagesResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.success = this.constructor.getValue(obj.success);
        this.message = this.constructor.getValue(obj.message);
        this.errorCode = this.constructor.getValue(obj.errorCode);
        this.status = this.constructor.getValue(obj.status || obj.Status);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'success', realName: 'success' },
            { name: 'message', realName: 'message' },
            { name: 'errorCode', realName: 'errorCode' },
            { name: 'status', realName: 'Status' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = SendScheduledmessagesResponse;
