const express = require('express');
const router = express.Router();

const {getChassis} = require('../controllers/getChassis');

router.get('/',getChassis);

module.exports = router;