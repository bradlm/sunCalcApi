const
  SunCalc = require('suncalc'),
  MAX_LAT = 180,
  MAX_LNG = 90;

class Utility {
  static sendJSON(res, code, data) {
    res.status(code).send(JSON.stringify(data));
  }
  static calculate(query) {
    var {
      epoch,
      lat,
      lng, 
      event
    } = query,
    time = SunCalc.getTimes(epoch ? new Date(epoch) : new Date(), lat, lng);
    if(event) {
      var output = {};
      output[event] = time[event].getTime();
      return output;
    } else
      for(let event in time) {
        time[event] = time[event].getTime();
      }
    return time;
  }
}

module.exports = Utility;