const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    creator: {type: String},
    title: {type: String, required: true},
    description: {type: String, required: true},
    tickets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Ticket"
        }
    ]
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;