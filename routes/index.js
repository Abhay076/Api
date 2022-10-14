const express = require('express');
const router = express.Router();
router.use('/add',require('../payload'));
module.export = router;