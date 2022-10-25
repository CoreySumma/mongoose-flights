
require('dotenv').config();

require('./config/database');


const Flight = require('./models/flight');
const Ticket = require('./models/ticket');


let flight, flights;
let ticket, tickets;


Movie.find({}).then(console.log);

console.log('Time to CRUD!');