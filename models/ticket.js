const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
            title: {type: String},
            submitter: {type: String},
            status: {type: String},
            date: { type: Date, default: Date.now }
})

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;