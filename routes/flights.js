var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');

router.get('/new', flightsCtrl.new);
router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/:id', flightsCtrl.show);
// POST /flights
router.post('/', flightsCtrl.create);


module.exports = router;
