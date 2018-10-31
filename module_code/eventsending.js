const Utils = require('./utils')
const request = require('request');
const DetectionPointCategories = require('./detectionpoints').DetectionPointCategories
const DetectionPoints = require('./detectionpoints').DetectionPoints

function AppSensorURL() 
{
    var url = Utils.LocalEnv().APPSENSOR_URL;

    return `The current URL is: ${url}`;
}

module.exports.AppSensorURL = AppSensorURL;

module.exports.SendEvent = SendEvent;

function SendEvent(label, eventOptions)
{
    category = DetectionPointCategories[label.replace(/[0-9]/g, '')];

    var env = Utils.LocalEnv();
    var url = env.APPSENSOR_URL;
    var header_name = env.APPSENSOR_HEADER_NAME;
    var header_val = env.APPSENSOR_HEADER_VALUE;

    var bodyJson = {}

    bodyJson.detectionSystem = {}
    bodyJson.detectionSystem.detectionSystemId = header_val

    bodyJson.detectionSystem.ipAddress = {};
    bodyJson.detectionSystem.ipAddress.address = 'local';
    bodyJson.detectionSystem.ipAddress.geoLocation = {};
    bodyJson.detectionSystem.ipAddress.geoLocation.latitude = 0;
    bodyJson.detectionSystem.ipAddress.geoLocation.longitude = 0;

   
    bodyJson.user = {}
    bodyJson.detectionPoint = {}
    if (eventOptions)
    {
        bodyJson.user.username = eventOptions.username ? eventOptions.username : "<<UNKNOWN>>";
        
        if (eventOptions.SourceIP) 
        {
            bodyJson.user.ipAddress = {};
            bodyJson.user.ipAddress.address = eventOptions.SourceIP;
            bodyJson.user.ipAddress.geoLocation = {};
            bodyJson.user.ipAddress.geoLocation.latitude = 0;
            bodyJson.user.ipAddress.geoLocation.longitude = 0;
        }
    }
    bodyJson.detectionPoint.category = category;
    bodyJson.detectionPoint.label = label
    bodyJson.timestamp = new Date().toISOString();

    const options = {  
        url: `${url}/api/v1.0/events`,
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        json: true,
        body: bodyJson
    };

    options.headers[header_name] = header_val


    request(options, function (error, response, body) 
    {
        if (error)
        {
            //console.log(error);
            
        }
        else
        {
            //console.log(`Label: ${label}, ResponseCode: ${response && response.statusCode}`);
        }
    
    });

    return JSON.stringify(options);

}




