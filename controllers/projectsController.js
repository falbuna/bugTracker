const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Project
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Project
            .findById(req.params.id)
            .populate("tickets")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Project
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Ticket.create(req.body)
            .then(({_id}) => db.Project.findOneAndUpdate({ _id: req.params.id }, {$push: { tickets: _id }}, {new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}
