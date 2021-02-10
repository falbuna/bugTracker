const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commenter: {type: String},
    message: {type: String},
    created: {type: Date, default: Date.now }
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;