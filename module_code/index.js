const EventSending = require('./eventsending')

module.exports.DetectionPoints = require('./detectionpoints').DetectionPoints


module.exports.AppSensorURL = EventSending.AppSensorURL;
module.exports.SendEventByDP = EventSending.SendEventByDP;
module.exports.SendEvent = EventSending.SendEvent;

    
/**
 * Simple hello world function.
 *
 * @param  {String} name
 * @return {String}
 */
    function HelloWorld(name) 
    {
        return `Hello again ${name}!`;
    }

module.exports.HelloWorld = HelloWorld;

