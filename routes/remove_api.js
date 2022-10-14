const express = require('express');
const router = express.Route();
const addapi = require('../apis/addcart');
router.get('/',addapi);
router.delete('/:id',addapi.remove);

module.export = router;