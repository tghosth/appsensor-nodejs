const request = require('request');

/**
 * Simple hello world function.
 *
 * @param  {String} name
 * @return {String}
 */
module.exports = {
    HelloWorld: function(name) 
    {

        return `Hello again ${name}!`;
    }

,

/**
 * Get current URL 
 *
 * @return {String}
 */
    AppSensorURL: function() 
    {
        var url = LocalEnv().APPSENSOR_URL;

        return `The current URL is: ${url}`;
    }

,

SendEvent: function(username, category, label) 
    {
        var url = LocalEnv().APPSENSOR_URL;

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
                'Accept': 'application/json',
                'X-Appsensor-Client-Application-Name2': 'myclientapp'

            },
            json: true,
            body: bodyJson
        };

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
    

        //return `The current URL is: ${url}`;
    }

};

function LocalEnv()
{
    if (process.env.NODE_ENV !== 'production') 
    {
        require('dotenv').load();
    }

    return process.env;
}