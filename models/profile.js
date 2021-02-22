const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    name: {type: String},
    role: {type: String},
    email: {type: String}
})

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;