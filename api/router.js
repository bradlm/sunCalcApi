'use strict'

const
  router = require('express').Router(),
  controller = require('./controller.js');

router.get('/', controller.info);
router.get('/time', controller.getTime);

module.exports = router;

