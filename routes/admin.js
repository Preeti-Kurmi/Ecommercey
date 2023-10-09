const path = require('path');

const express = require('express');

//const rootDir = require('../util/path');
const controll=require('../controller/product')

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', controll.getaddproduct);

// /admin/add-product => POST
router.post('/add-product',controll.postaddproduct);

module.exports = router;
