const DetectionPoints = 
{
    RE1: 'RE1',
    RE2: 'RE2',
    RE3: 'RE3',
    RE4: 'RE4',
    RE5: 'RE5',
    RE6: 'RE6',
    RE7: 'RE7',
    RE8: 'RE8',
    AE1: 'AE1',
    AE2: 'AE2',
    AE3: 'AE3',
    AE4: 'AE4',
    AE5: 'AE5',
    AE6: 'AE6',
    AE7: 'AE7',
    AE8: 'AE8',
    AE9: 'AE9',
    AE10: 'AE10',
    AE11: 'AE11',
    AE12: 'AE12',
    AE13: 'AE13',
    SE1: 'SE1',
    SE2: 'SE2',
    SE3: 'SE3',
    SE4: 'SE4',
    SE5: 'SE5',
    SE6: 'SE6',
    ACE1: 'ACE1',
    ACE2: 'ACE2',
    ACE3: 'ACE3',
    ACE4: 'ACE4',
    IE1: 'IE1',
    IE2: 'IE2',
    IE3: 'IE3',
    IE4: 'IE4',
    IE5: 'IE5',
    IE6: 'IE6',
    IE7: 'IE7',
    EE1: 'EE1',
    EE2: 'EE2',
    CIE1: 'CIE1',
    CIE2: 'CIE2',
    CIE3: 'CIE3',
    CIE4: 'CIE4',
    FIO1: 'FIO1',
    FIO2: 'FIO2',
    HT1: 'HT1',
    HT2: 'HT2',
    HT3: 'HT3',
    UT1: 'UT1',
    UT2: 'UT2',
    UT3: 'UT3',
    UT4: 'UT4',
    STE1: 'STE1',
    STE2: 'STE2',
    STE3: 'STE3',
    RP1: 'RP1',
    RP2: 'RP2',
    RP3: 'RP3',
    RP4: 'RP4'
}

const DetectionPointCategories = {}
DetectionPointCategories.RE = 'Request Exception',
DetectionPointCategories.AE = 'Authentication Exception',
DetectionPointCategories.SE = 'Session Exception',
DetectionPointCategories.ACE = 'Access Control Exception',
DetectionPointCategories.IE = 'Input Exception',
DetectionPointCategories.EE = 'Encoding Exception',
DetectionPointCategories.CIE = 'Command Injection Exception',
DetectionPointCategories.FIO = 'File IO Exception',
DetectionPointCategories.HT = 'Honey Trap',
DetectionPointCategories.UT = 'User Trend Exception',
DetectionPointCategories.STE = 'System Trend Exception',
DetectionPointCategories.RP = 'Reputation'

module.exports.DetectionPoints = DetectionPoints;
module.exports.DetectionPointCategories = DetectionPointCategories