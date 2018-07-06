/**
 * Simple hello world function.
 *
 * @param  {String} name
 * @return {String}
 */
module.exports = {
    HelloWorld: function(name) {

        if (process.env.NODE_ENV !== 'production') 
        {
            require('dotenv').load();
        }

        var url = process.env.APPSENSOR_URL;

      return `Hello again ${name}! The URL is :${url}`;
    }
  };