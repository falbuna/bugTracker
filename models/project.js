const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    creator: {type: String},
    title: {type: String},
    description: {type: String},
    tickets: [
        {
            title: {type: String},
            submitter: {type: String},
            status: {type: String},
            date: { type: Date, default: Date.now }
        }
    ]
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;