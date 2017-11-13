const
  path = require('path'),
  Utility = require('./utility'), 
  {
    sendJSON,
    checkGeo,
    calculate
  } = Utility,
  OK = 200, 
  FAIL = 400;

class Controller {
  static info(req, res) {
    try {
      res.status(OK).sendFile(path.join(__dirname, '../README.MD'));
    } catch(e) {
      console.warn(e);
      sendJSON(res, FAIL, e.message);
    }
  }
  static getTime(req, res) { 
    try {
      sendJSON(res, OK, calculate(req.query));
    } catch(e) {
      console.warn(e);
      sendJSON(res, FAIL, e.message);
    }
  }
}

module.exports = Controller;