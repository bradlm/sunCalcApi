'use strict'

const 
  PORT = process.env.PORT || 1337, 
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  chalk = require('chalk'), 
  api = require('./api/router');
  

app.use('/api/', [
  bodyParser.json(),
  bodyParser.urlencoded({extended:true}),
  api
])

app.listen(PORT, () => console.log(
  chalk.green.bold('SunCalc API listening on port: ') 
  + chalk.cyan.bold(PORT)
));