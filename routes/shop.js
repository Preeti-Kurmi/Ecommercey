const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// const adminData = require('./admin');
const  controll=require('../controller/product')

const router = express.Router();

router.get('/', controll.shopproduct);

module.exports = router;
