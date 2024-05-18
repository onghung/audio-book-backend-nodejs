const express = require('express');
const {convertTextToSpeech} = require('../controllers/tts');

const router = express.Router();

router.post('/tts', convertTextToSpeech);

module.exports = {
    routes: router
}