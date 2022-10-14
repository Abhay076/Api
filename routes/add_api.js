const express = require('express');
const router = express.Router();
const payLoadApi = require('../payload');
router.post('/add-cart',payLoadApi.create);
module.export = router;