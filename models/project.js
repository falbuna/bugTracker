const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    author: {type: String},
    title: {type: String},
    description: {type: String}
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;