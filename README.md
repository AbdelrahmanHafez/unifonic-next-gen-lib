# Getting started

## Introduction

Send SMS messages using Unifonic Messaging API. Get your dedicated Universal number, and start sending messages today.

Unifonic NextGen Restful and HTTP **API's** uses The basic Authentication protocol. All request and response bodies are formatted in JSON.


## Get an account
To start using  the API you need to send an email to Unifonic to create Appsid for you.

## Base URL
All URLs referenced in the documentation have the following base:

**basic.unifonic.com**
## Security
To ensure privacy we recommend you to use HTTPS for all Unifonic API requests.
you can download our HTTPS certificate.

 [Download] (https://api.unifonic.com/udm/https.zip)





## Formats

  Unifonic API only supports JSON format. All request must use the Content-type header set to application/json.

## Support
We’re here to help! Get in touch with support at <support@unifonic.com> and we’ll get back to you as soon as we can or you can contact us throw live chat on our [website] (www.unifonic.com).

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Unifonic%20NextGen-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Unifonic%20NextGen-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `UnifonicNextGenLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Unifonic%20NextGen-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Unifonic%20NextGen-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Unifonic%20NextGen-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Unifonic%20NextGen-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Unifonic NextGenController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Unifonic%20NextGenController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| basicAuthUserName | The username to use with basic authentication |
| basicAuthPassword | The password to use with basic authentication |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.basicAuthUserName = "basicAuthUserName"; // The username to use with basic authentication
lib.Configuration.basicAuthPassword = "basicAuthPassword"; // The password to use with basic authentication

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [WrapperController](#wrapper_controller)
* [RestController](#rest_controller)

## <a name="wrapper_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WrapperController") WrapperController

### Get singleton instance

The singleton instance of the ``` WrapperController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WrapperController;
```

### <a name="create_get_msg_query"></a>![Method: ](https://apidocs.io/img/method.png ".WrapperController.createGetMsgQuery") createGetMsgQuery

> Unifonic Get message query API allows you to get details of specified message.


```javascript
function createGetMsgQuery(appsid, msgid, to, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appsid |  ``` Required ```  | A character string that uniquely identifies your app |
| msgid |  ``` Required ```  | A unique ID that identifies a message |
| to |  ``` Optional ```  | Destination mobile number, mobile numbers must be in international format without 00 or + Example: (4452023498) |



#### Example Usage

```javascript

    var appsid = '6v253153s1g7831s5';
    var msgid = 3200017891630;
    var to = 966505980169;

    controller.createGetMsgQuery(appsid, msgid, to, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authentication failed |
| 402 | Missing parameter AppSid |
| 432 | MessageId must be numeric |
| 452 | User must specify either messageId or recipient parameter |




### <a name="create_send_message"></a>![Method: ](https://apidocs.io/img/method.png ".WrapperController.createSendMessage") createSendMessage

> Unifonic Send Wrapper API allows you to send  text messages to  multiple users at the same time


```javascript
function createSendMessage(appsid, msg, to, sender, baseEncode, encoding, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appsid |  ``` Required ```  | A character string that uniquely identifies your app |
| msg |  ``` Required ```  | Message body supports both English and unicodes characters, concatenated messages is supported |
| to |  ``` Required ```  | Destination mobile number, mobile numbers must be in international format without 00 or + Example: (4452023498) |
| sender |  ``` Required ```  | The SenderID to send from, App default SenderID is used unless else stated |
| baseEncode |  ``` Optional ```  ``` DefaultValue ```  | Binary-to-text encoding schemes that represent binary data in an ASCII string format |
| encoding |  ``` Optional ```  ``` DefaultValue ```  | Converts information from a source into symbols for communication or storage, GSM7 for English and UCS2 for Arabic |



#### Example Usage

```javascript

    var appsid = '6v253153s1g7831s5';
    var msg = 'Test';
    var to = 966505980169;
    var sender = 'sender';
    var baseEncode = true;
    var encoding = 'encoding';

    controller.createSendMessage(appsid, msg, to, sender, baseEncode, encoding, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authentication failed |
| 402 | Missing parameter AppSid |
| 459 | Authentication parameters are incorrectly base64 encoded |




[Back to List of Controllers](#list_of_controllers)

## <a name="rest_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RestController") RestController

### Get singleton instance

The singleton instance of the ``` RestController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RestController;
```

### <a name="create_send_scheduled_messages"></a>![Method: ](https://apidocs.io/img/method.png ".RestController.createSendScheduledMessages") createSendScheduledMessages

> Unifonic Send Scheduled API allows you to schedule text messages to users around the globe through simple RESTful API to be sent in future.


```javascript
function createSendScheduledMessages(appSid, senderID, recipient, body, timeScheduled, responseType, correlationID, baseEncode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appSid |  ``` Required ```  | A character string that uniquely identifies your app |
| senderID |  ``` Required ```  | The SenderID to send from, App default SenderID is used unless else stated |
| recipient |  ``` Required ```  | Destination mobile number, mobile numbers must be in international format without 00 or + Example: (4452023498) |
| body |  ``` Required ```  | Message body supports both English and unicodes characters, concatenated messages is supported |
| timeScheduled |  ``` Required ```  | Schedule send messages, in the following format yyyy-mm-dd HH:mm:ss |
| responseType |  ``` Optional ```  | Support json format only |
| correlationID |  ``` Optional ```  | Is a unique identifier value that is attached to requests and messages |
| baseEncode |  ``` Optional ```  | Binary-to-text encoding schemes that represent binary data in an ASCII string format |



#### Example Usage

```javascript

    var appSid = '6v253153s1g7831s5';
    var senderID = 'sender';
    var recipient = 966505980169;
    var body = 'Test';
    var timeScheduled = "2020-04-12 11:50:00";
    var responseType = 'responseType';
    var correlationID = 'CorrelationID';
    var baseEncode = true;

    controller.createSendScheduledMessages(appSid, senderID, recipient, body, timeScheduled, responseType, correlationID, baseEncode, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authentication failed |
| 406 | Wrong parameter format |
| 449 | Message body is empty |
| 451 | TimeScheduled parameter must indicate time in the future |
| 480 | This user cannot use specified SenderID |
| 482 | Invalid dest num |




### <a name="create_send_message"></a>![Method: ](https://apidocs.io/img/method.png ".RestController.createSendMessage") createSendMessage

> Unifonic Send API allows you to send  text messages to users around the globe through simple RESTful APIs


```javascript
function createSendMessage(appSid, senderID, body, recipient, responseType, correlationID, baseEncode, statusCallback, async, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appSid |  ``` Required ```  | A character string that uniquely identifies your app |
| senderID |  ``` Required ```  | The SenderID to send from, App default SenderID is used unless else stated |
| body |  ``` Required ```  | Message body supports both English and unicodes characters, concatenated messages is supported |
| recipient |  ``` Required ```  | Destination mobile number, mobile numbers must be in international format without 00 or + Example: (4452023498) |
| responseType |  ``` Optional ```  | Support json format only |
| correlationID |  ``` Optional ```  | Is a unique identifier value that is attached to requests and messages |
| baseEncode |  ``` Optional ```  | Binary-to-text encoding schemes that represent binary data in an ASCII string format |
| statusCallback |  ``` Optional ```  | Filter messages report according to a specific message status, "Sent", "Queued", "Rejected" or "Failed |
| async |  ``` Optional ```  ``` DefaultValue ```  | It specifies that the request will be executed asynchronously as soon as it is sent |



#### Example Usage

```javascript

    var appSid = '6v253153s1g7831s5';
    var senderID = 'sender';
    var body = 'Test';
    var recipient = 966505980169;
    var responseType = 'responseType';
    var correlationID = 'CorrelationID';
    var baseEncode = true;
    var statusCallback = 'statusCallback';
    var async = true;

    controller.createSendMessage(appSid, senderID, body, recipient, responseType, correlationID, baseEncode, statusCallback, async, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authentication failed |
| 449 | Message body is empty |
| 480 | This user cannot use specified SenderID |
| 482 | Invalid dest num |




### <a name="get_scheduled_message_details"></a>![Method: ](https://apidocs.io/img/method.png ".RestController.getScheduledMessageDetails") getScheduledMessageDetails

> Unifonic Scheduled message details allows you to get details of scheduled messages through simple RESTful APIs


```javascript
function getScheduledMessageDetails(appSid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appSid |  ``` Required ```  | A character string that uniquely identifies your app |



#### Example Usage

```javascript

    var appSid = '6v253153s1g7831s5';

    controller.getScheduledMessageDetails(appSid, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authentication failed |




### <a name="delete_stop_scheduled_messages"></a>![Method: ](https://apidocs.io/img/method.png ".RestController.deleteStopScheduledMessages") deleteStopScheduledMessages

> Unifonic Stop scheduled messages API allows you to Delete (Stops) scheduled message,If MessageID is specified only one message is stopped, Otherwise all messages are stopped through simple RESTful APIs.


```javascript
function deleteStopScheduledMessages(appSid, messageID, responseFormat, baseEncode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appSid |  ``` Required ```  | A character string that uniquely identifies your app |
| messageID |  ``` Optional ```  | A unique ID that identifies a message |
| responseFormat |  ``` Optional ```  | support json format only |
| baseEncode |  ``` Optional ```  | Binary-to-text encoding schemes that represent binary data in an ASCII string format |



#### Example Usage

```javascript

    var appSid = '6v253153s1g7831s5';
    var messageID = 3200017889502;
    var responseFormat = '';
    var baseEncode = true;

    controller.deleteStopScheduledMessages(appSid, messageID, responseFormat, baseEncode, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authentication failed |
| 455 | Scheduled message not found for this User |




### <a name="create_get_message_details"></a>![Method: ](https://apidocs.io/img/method.png ".RestController.createGetMessageDetails") createGetMessageDetails

> Unifonic Get message details API allows you to get details of messages with optional filters,returns paginated messages, next page or previous page through simple RESTful APIs


```javascript
function createGetMessageDetails(appSid, messageID, senderID, recipient, dateFrom, dateTo, correlationID, limit, baseEncode, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| appSid |  ``` Required ```  | A character string that uniquely identifies your app |
| messageID |  ``` Optional ```  | A unique ID that identifies a message |
| senderID |  ``` Optional ```  | The SenderID to send from, App default SenderID is used unless else stated |
| recipient |  ``` Optional ```  | Destination mobile number, mobile numbers must be in international format without 00 or + Example: (4452023498) |
| dateFrom |  ``` Optional ```  | The start date for the report time interval, date format should be yyyy-mm-dd |
| dateTo |  ``` Optional ```  | The end date for the report time interval, date format should be yyyy-mm-dd |
| correlationID |  ``` Optional ```  | Is a unique identifier value that is attached to requests and messages |
| limit |  ``` Optional ```  | The maximum number of messages details |
| baseEncode |  ``` Optional ```  | Binary-to-text encoding schemes that represent binary data in an ASCII string format |



#### Example Usage

```javascript

    var appSid = '6v253153s1g7831s5';
    var messageID = 2000000172800;
    var senderID = 'sender';
    var recipient = 966505980169;
    var dateFrom = "2018-04-12";
    var dateTo = "2018-09-12";
    var correlationID = 'CorrelationID';
    var limit = 20;
    var baseEncode = true;

    controller.createGetMessageDetails(appSid, messageID, senderID, recipient, dateFrom, dateTo, correlationID, limit, baseEncode, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 401 | Authentication failed |
| 432 | MessageId must be numeric |
| 599 | Request failed |




[Back to List of Controllers](#list_of_controllers)



