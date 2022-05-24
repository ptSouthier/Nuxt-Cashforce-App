const router = require('express').Router();
const Orders = require('../controllers/OrdersController');

router.get('/', Orders.getAll);
router.get('/:id', Orders.getById);

module.exports = router;
