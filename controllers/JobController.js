const db = require("../models");
module.exports = {
    create: function (req, res){
        db.Job
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req,res){
        console.log("getting all jobs:")
        db.Job
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    },
    update: function (req, res){
        db.Job
        .findOneAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));

    },
    findById: function (req, res){
        db.Job
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    
}