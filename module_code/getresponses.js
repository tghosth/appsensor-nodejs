const Utils = require('./utils')
const request = require('request');

function GetResponses(callback) 
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


    request(options, callback);

    return JSON.stringify(options);

}

module.exports.GetResponses = GetResponses;