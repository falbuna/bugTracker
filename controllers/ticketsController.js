const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Ticket
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Ticket
            .findById(req.params.id)
            .populate("comments")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        db.Comment.create(req.body)
            .then(({_id}) => db.Ticket.findOneAndUpdate({ _id: req.params.id }, {$push: { comments: _id }}, {new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){
        db.Ticket
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
    
}