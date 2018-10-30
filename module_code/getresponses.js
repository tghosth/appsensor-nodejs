const Utils = require('./utils')
const request = require('request');
var system_sleep = require('system-sleep')

function GetResponses()
{
    status = "NOTDONE";
    responses = "";

    setTimeout(()=>{
         status = "FAILED";
         }, 5000);

         GetResponsesInner((responseOut)=>{
            responses = responseOut;
            status = "DONE";
    });

    while(status == "NOTDONE"){
        system_sleep(100);
    }

    return responses;
} 


function GetResponsesInner(callback) 
{
    var env = Utils.LocalEnv();
    var url = env.APPSENSOR_URL;
    var header_name = env.APPSENSOR_HEADER_NAME;
    var header_val = env.APPSENSOR_HEADER_VALUE;

    const options = {  
        url: `${url}/api/v1.0/responses`,
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    };

    options.headers[header_name] = header_val


    request(options, function (error, response, body) 
    {
        if (error)
        {
            callback(error);
            
        }
        else
        {
            console.log(`ResponseCode: ${response && response.statusCode}`);
            callback(body);
        }
    
    });

    return options;

}

module.exports.GetResponses = GetResponses;