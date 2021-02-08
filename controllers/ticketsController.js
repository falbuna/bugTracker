const db = require("../models");

module.exports = {
    create: function(req, res){
        db.Ticket.create(req.body)
            .then(({_id}) => db.Project.findOneAndUpdate({ _id: req.params.id }, {$push: { tickets: _id }}, {new: true }))
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}