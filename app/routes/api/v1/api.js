const express = require('express');
const weatherController = require("../../../controller/weatherController");
const weather = require("../../../controller/weather");
const router = new express.Router();

router.get('/abc',weatherController.index)
router.get('/weather',weather.indexNew)

module.exports = router;