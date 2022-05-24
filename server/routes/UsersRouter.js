const router = require('express').Router();
const Users = require('../controllers/UsersController');

router.get('/', Users.getAll);
router.get('/:id', Users.getById);

module.exports = router;
