// Bring in the separate modules
const EventSending = require('./eventsending')
const GetResponses = require('./getresponses')
const DetectionPoints = require('./detectionpoints').DetectionPoints


// Export the relevant objects and methods
module.exports.DetectionPoints = DetectionPoints

/**
 * Get current URL to which appsensor events are being sent
 *
 * @return {String}
 */
module.exports.AppSensorURL = EventSending.AppSensorURL;

/**
 * Send an AppSensor event using a detection point from the DetectionPoints object
 *
 * @param  {String} username
 * @param  {DetectionPoints} detectionPoint
 * @return {String} 
 */
module.exports.SendEvent = EventSending.SendEvent;

/**
 * Get responses by providing a simple callback method which returns a string containing the response
 *
 * @param  {function} callback // 
 */
module.exports.GetResponses = GetResponses.GetResponses
