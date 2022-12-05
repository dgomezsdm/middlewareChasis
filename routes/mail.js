const express = require('express');
const router = express.Router();

const {sendEmail} = require('../controllers/mail');


router.post('/sendMail',sendEmail);

module.exports = router;