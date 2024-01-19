
const express = require('express');
const router = express.Router();

const roomhander = require('../RouterHeader/roominfo');

router.post('/uproom', roomhander.updateroomInfo);

module.exports = router;
