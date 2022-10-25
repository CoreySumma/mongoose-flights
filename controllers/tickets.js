const Ticket = require('../models/ticket');
const Flight= require('../models/flight');

module.exports = {
  new: newTicket,
  create,
};

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  // Fix by either reformatting to "MM-DD-YYYY" or by 
  // appending a "time" fragment like this... 
  
  Performer.create(req.body, function (err, performer) {
    res.redirect('/tickets/new');
  });
}

function newTicket(req, res) {
  Ticket.find({})
    .sort('seat')
    .exec(function (err, performers) {
      res.render('Tickets/new', {
        title: 'Add Ticket', //might have to be flight or somehting
        tickets
      });
    });
}