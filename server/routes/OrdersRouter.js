const router = require('express').Router();
const Orders = require('../controllers/OrdersController');

router.get('/', Orders.getAll);

module.exports = router;
