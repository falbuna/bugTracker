const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    tenent: {type: String},
    connection: {type: String},
    email: {type: String},
    password: {type: String},
    debug: {type: Boolean},
    profile: [
        {
            type: Schema.Types.ObjectId,
            ref: "Profile"
        }
    ]
})

const User = mongoose.model("User", userSchema);

module.exports = User;