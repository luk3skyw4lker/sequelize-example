const router = require('express').Router();
const UserController = require('./controllers/UserController');
const AddressesController = require('./controllers/AddressesController');
const TechController = require('./controllers/TechController');

router.post('/users', UserController.store);
router.get('/users', UserController.index);

router.post('/users/:user_id/addresses', AddressesController.store);
router.get('/users/:user_id/addresses', AddressesController.index);

router.post('/users/:user_id/techs', TechController.store);
router.get('/users/:user_id/techs', TechController.index);

module.exports = router;