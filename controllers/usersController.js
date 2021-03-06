const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.User
            .find(req.query)
            .populate("profile")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.User
            .findById(req.params.id)
            .populate("profile")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Profile.create(req.body)
        .then(({_id}) => db.User.findOneAndUpdate({ _id: req.params.id }, {$push: { profile: _id }}, {new: true }))
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
}
}