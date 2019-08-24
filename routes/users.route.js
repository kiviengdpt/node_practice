var express = require('express')

var controller = require('../controllers/users.controller')
var validate = require('../validate/users.validate')

var router = express.Router()

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', controller.postCreate, validate.postCreate );

router.get('/:id', controller.get)

module.exports = router;
