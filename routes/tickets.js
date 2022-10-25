const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// This router is mounted to a "starts with" path of '/'

// GET /tickets/new
router.get('/tickets/new', ticketsCtrl.new);
// POST /tickets
router.post('/flights', ticketsCtrl.create);
// POST /movies/ :id//performers (assoc movie & performer)


module.exports = router;