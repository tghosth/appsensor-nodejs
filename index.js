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

},{

/**
 * Get current URL 
 *
 * @return {String}
 */
    AppSensorURL: function() 
    {
        var url = process.env.APPSENSOR_URL;

        return LocalEnv().url;
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