const express = require('express');
const router = express.Router();

const {getChassis, getChassis2} = require('../controllers/getChassis');

router.get('/',getChassis);
router.get('/test',getChassis2);

module.exports = router;