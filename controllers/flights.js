const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect(`/flights/${flight._id}`);
    });
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id).populate('destinations').exec(function(err, flight) {
        flight.destinations.sort(function(a, b) {
            return a.arrival- b.arrival;
        });
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets });
        });
    });
}

function newFlight(req, res) {
    res.render('flights/new');
}


