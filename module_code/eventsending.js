const Utils = require('./utils')
const request = require('request');
const DetectionPointCategories = require('./detectionpoints').DetectionPointCategories
const DetectionPoints = require('./detectionpoints').DetectionPoints

/**
 * Get current URL to which appsensor events are being sent
 *
 * @return {String}
 */
function AppSensorURL() 
{
    var url = Utils.LocalEnv().APPSENSOR_URL;

    return `The current URL is: ${url}`;
}

module.exports.AppSensorURL = AppSensorURL;

/**
 * Send an AppSensor event using a detection point from the DetectionPoints object
 *
 * @param  {String} username
 * @param  {DetectionPoints} detectionPoint
 */
function SendEvent(username, detectionPoint)
{
    category = DetectionPointCategories[detectionPoint.replace(/[0-9]/g, '')];
    SendEventInner(username, category, detectionPoint)
}

module.exports.SendEvent = SendEvent;

function SendEventInner(username, category, label) 
{
    var env = Utils.LocalEnv();
    var url = env.APPSENSOR_URL;
    var header_name = env.APPSENSOR_HEADER_NAME;
    var header_val = env.APPSENSOR_HEADER_VALUE;

    var bodyJson={}
    bodyJson.user={}
    bodyJson.detectionPoint={}
    bodyJson.user.username = username
    bodyJson.detectionPoint.category = category
    bodyJson.detectionPoint.label = label
    bodyJson.timestamp = new Date().toISOString()


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

    //console.log(options.headers)
    //return
    request(options, function (error, response, body) 
    {
        if (error)
        {
            //return error;
            console.log(error);
            
        }
        else
        {
            console.log(`Label: ${label}, ResponseCode: ${response && response.statusCode}`);
        }
    
    });


}



