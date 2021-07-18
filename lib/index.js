/**
  * @module UnifonicNextGenLib
  *
  * ## Introduction  Send SMS messages using Unifonic Messaging API. Get your dedicated Universal
  * number, and start sending messages today.  Unifonic NextGen Restful and HTTP **API's** uses The
  * basic Authentication protocol. All request and response bodies are formatted in JSON.   ## Get
  * an account To start using  the API you need to send an email to Unifonic to create Appsid for
  * you.  ## Base URL All URLs referenced in the documentation have the following base:  **basic.
  * unifonic.com** ## Security To ensure privacy we recommend you to use HTTPS for all Unifonic API
  * requests. you can download our HTTPS certificate.   [Download] (https://api.unifonic.
  * com/udm/https.zip)      ## Formats    Unifonic API only supports JSON format. All request must
  * use the Content-type header set to application/json.  ## Support We’re here to help! Get in
  * touch with support at <support@unifonic.com> and we’ll get back to you as soon as we can or you
  * can contact us throw live chat on our [website] (www.unifonic.com).
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const WrapperController = require('./Controllers/WrapperController');
const RestController = require('./Controllers/RestController');
const SendResponse = require('./Models/SendResponse');
const SendScheduledmessagesResponse = require('./Models/SendScheduledmessagesResponse');
const StopScheduledMessagesResponse = require('./Models/StopScheduledMessagesResponse');
const GetMessagesDetailsResponse = require('./Models/GetMessagesDetailsResponse');
const SendWrapperResponse = require('./Models/SendWrapperResponse');
const GetMessageQueryResponse = require('./Models/GetMessageQueryResponse');
const GetScheduledMessageResponse = require('./Models/GetScheduledMessageResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of UnifonicNextGenLib
    Configuration,
    Environments,
    // controllers of UnifonicNextGenLib
    WrapperController,
    RestController,
    // models of UnifonicNextGenLib
    SendResponse,
    SendScheduledmessagesResponse,
    StopScheduledMessagesResponse,
    GetMessagesDetailsResponse,
    SendWrapperResponse,
    GetMessageQueryResponse,
    GetScheduledMessageResponse,
    // exceptions of UnifonicNextGenLib
    APIException,
};

module.exports = initializer;
