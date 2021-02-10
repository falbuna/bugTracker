const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
            title: {type: String},
            submitter: {type: String},
            status: {type: String},
            project: {type: String},
            priority: {type: String},
            type: {type: String},
            date: {type: Date, default: Date.now },
            comments: [
                {
                    type: Schema.Types.ObjectId,
                    ref: "Comment"
                }
            ]
})

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;