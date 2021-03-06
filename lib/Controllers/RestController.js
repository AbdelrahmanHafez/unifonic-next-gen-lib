/**
 * UnifonicNextGenLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _servers = require('../Servers');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class RestController {
    /**
     * Unifonic Send Scheduled API allows you to schedule text messages to users around the globe
     * through simple RESTful API to be sent in future.
     *
     * @param {string} appSid A character string that uniquely identifies your app
     * @param {string} senderID The SenderID to send from, App default SenderID is used unless else
     * stated
     * @param {long} recipient Destination mobile number, mobile numbers must be in international
     * format without 00 or + Example: (4452023498)
     * @param {string} body Message body supports both English and unicodes characters,
     * concatenated messages is supported
     * @param {dateTime} timeScheduled Schedule send messages, in the following format yyyy-mm-dd
     * HH:mm:ss
     * @param {string} responseType (optional) Support json format only
     * @param {string} correlationID (optional) Is a unique identifier value that is attached to
     * requests and messages
     * @param {bool} baseEncode (optional) Binary-to-text encoding schemes that represent binary
     * data in an ASCII string format
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSendScheduledMessages(appSid,
        senderID,
        recipient,
        body,
        timeScheduled,
        responseType,
        correlationID,
        baseEncode,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (appSid === null || appSid === undefined) {
            const _err = { errorMessage: 'The parameter `appSid` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (senderID === null || senderID === undefined) {
            const _err = { errorMessage: 'The parameter `senderID` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (recipient === null || recipient === undefined) {
            const _err = { errorMessage: 'The parameter `recipient` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (body === null || body === undefined) {
            const _err = { errorMessage: 'The parameter `body` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (timeScheduled === null || timeScheduled === undefined) {
            const _err = { errorMessage: 'The parameter `timeScheduled` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.BASE_URL);

        const _pathUrl = '/rest/SMS/messages/scheduledmessages';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            AppSid: appSid,
            SenderID: senderID,
            Recipient: recipient,
            Body: body,
            TimeScheduled: _apiHelper.stringifyDateTime(timeScheduled, 'rfc1123'),
            responseType,
            CorrelationID: correlationID,
            baseEncode,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'SendScheduledmessagesResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    const _err = { errorMessage: 'Authentication failed',
                        errorCode: 401,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 406) {
                    const _err = { errorMessage: 'Wrong parameter format',
                        errorCode: 406,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 449) {
                    const _err = { errorMessage: 'Message body is empty',
                        errorCode: 449,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 451) {
                    const _err = { errorMessage: 'TimeScheduled parameter must indicate time in the future',
                        errorCode: 451,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 480) {
                    const _err = { errorMessage: 'This user cannot use specified SenderID',
                        errorCode: 480,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 482) {
                    const _err = { errorMessage: 'Invalid dest num',
                        errorCode: 482,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Unifonic Send API allows you to send  text messages to users around the globe through
     * simple RESTful APIs
     *
     * @param {string} appSid A character string that uniquely identifies your app
     * @param {string} senderID The SenderID to send from, App default SenderID is used unless else
     * stated
     * @param {string} body Message body supports both English and unicodes characters,
     * concatenated messages is supported
     * @param {long} recipient Destination mobile number, mobile numbers must be in international
     * format without 00 or + Example: (4452023498)
     * @param {string} responseType (optional) Support json format only
     * @param {string} correlationID (optional) Is a unique identifier value that is attached to
     * requests and messages
     * @param {bool} baseEncode (optional) Binary-to-text encoding schemes that represent binary
     * data in an ASCII string format
     * @param {string} statusCallback (optional) Filter messages report according to a specific
     * message status, "Sent", "Queued", "Rejected" or "Failed
     * @param {bool} async (optional) It specifies that the request will be executed asynchronously
     * as soon as it is sent
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSendMessage(appSid,
        senderID,
        body,
        recipient,
        responseType,
        correlationID,
        baseEncode,
        statusCallback,
        async,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (appSid === null || appSid === undefined) {
            const _err = { errorMessage: 'The parameter `appSid` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (senderID === null || senderID === undefined) {
            const _err = { errorMessage: 'The parameter `senderID` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (body === null || body === undefined) {
            const _err = { errorMessage: 'The parameter `body` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (recipient === null || recipient === undefined) {
            const _err = { errorMessage: 'The parameter `recipient` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.BASE_URL);

        const _pathUrl = '/rest/SMS/messages';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            AppSid: appSid,
            SenderID: senderID,
            Body: body,
            Recipient: recipient,
            responseType,
            CorrelationID: correlationID,
            baseEncode,
            statusCallback,
            async: (async !== null) ? async : false,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'SendResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    const _err = { errorMessage: 'Authentication failed',
                        errorCode: 401,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 449) {
                    const _err = { errorMessage: 'Message body is empty',
                        errorCode: 449,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 480) {
                    const _err = { errorMessage: 'This user cannot use specified SenderID',
                        errorCode: 480,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 482) {
                    const _err = { errorMessage: 'Invalid dest num',
                        errorCode: 482,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Unifonic Scheduled message details allows you to get details of scheduled messages through
     * simple RESTful APIs
     *
     * @param {string} appSid A character string that uniquely identifies your app
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getScheduledMessageDetails(appSid, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (appSid === null || appSid === undefined) {
            const _err = { errorMessage: 'The parameter `appSid` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.BASE_URL);

        const _pathUrl = '/rest/SMS/messages/scheduledmessages';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            AppSid: appSid,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetScheduledMessageResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    const _err = { errorMessage: 'Authentication failed',
                        errorCode: 401,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Unifonic Stop scheduled messages API allows you to Delete (Stops) scheduled message,If
     * MessageID is specified only one message is stopped, Otherwise all messages are stopped
     * through simple RESTful APIs.
     *
     * @param {string} appSid A character string that uniquely identifies your app
     * @param {long} messageID (optional) A unique ID that identifies a message
     * @param {string} responseFormat (optional) support json format only
     * @param {bool} baseEncode (optional) Binary-to-text encoding schemes that represent binary
     * data in an ASCII string format
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteStopScheduledMessages(appSid, messageID, responseFormat, baseEncode, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (appSid === null || appSid === undefined) {
            const _err = { errorMessage: 'The parameter `appSid` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.BASE_URL);

        const _pathUrl = '/rest/SMS/messages/scheduledmessages';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            AppSid: appSid,
            MessageID: messageID,
            responseFormat,
            baseEncode,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'StopScheduledMessagesResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    const _err = { errorMessage: 'Authentication failed',
                        errorCode: 401,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 455) {
                    const _err = { errorMessage: 'Scheduled message not found for this User',
                        errorCode: 455,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Unifonic Get message details API allows you to get details of messages with optional
     * filters,returns paginated messages, next page or previous page through simple RESTful
     * APIs
     *
     * @param {string} appSid A character string that uniquely identifies your app
     * @param {long} messageID (optional) A unique ID that identifies a message
     * @param {string} senderID (optional) The SenderID to send from, App default SenderID is used
     * unless else stated
     * @param {long} recipient (optional) Destination mobile number, mobile numbers must be in
     * international format without 00 or + Example: (4452023498)
     * @param {date} dateFrom (optional) The start date for the report time interval, date format
     * should be yyyy-mm-dd
     * @param {date} dateTo (optional) The end date for the report time interval, date format
     * should be yyyy-mm-dd
     * @param {string} correlationID (optional) Is a unique identifier value that is attached to
     * requests and messages
     * @param {long} limit (optional) The maximum number of messages details
     * @param {bool} baseEncode (optional) Binary-to-text encoding schemes that represent binary
     * data in an ASCII string format
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createGetMessageDetails(appSid,
        messageID,
        senderID,
        recipient,
        dateFrom,
        dateTo,
        correlationID,
        limit,
        baseEncode,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (appSid === null || appSid === undefined) {
            const _err = { errorMessage: 'The parameter `appSid` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.getBaseUri(_servers.BASE_URL);

        const _pathUrl = '/rest/SMS/Messages/GetMessagesDetails';
        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            AppSid: appSid,
            MessageID: messageID,
            senderID,
            Recipient: recipient,
            dateFrom: _apiHelper.stringifyDateTime(dateFrom, 'date'),
            dateTo: _apiHelper.stringifyDateTime(dateTo, 'date'),
            CorrelationID: correlationID,
            Limit: limit,
            baseEncode,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'user-agent': 'APIMATIC 2.0',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            username: _configuration.basicAuthUserName,
            password: _configuration.basicAuthPassword,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    let parsed = JSON.parse(_response.body);
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'GetMessagesDetailsResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else if (_response.statusCode === 401) {
                    const _err = { errorMessage: 'Authentication failed',
                        errorCode: 401,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 432) {
                    const _err = { errorMessage: 'MessageId must be numeric',
                        errorCode: 432,
                        errorResponse: _response.body,
                    };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else if (_response.statusCode === 599) {
                    const _err = { errorMessage: 'Request failed', errorCode: 599, errorResponse: _response.body };
                    _callback(_err, null, _context);
                    _reject(_err);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = RestController;
