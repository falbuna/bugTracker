const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb+srv://:@cluster0.mzg7y.mongodb.net/?retryWrites=true&w=majority"
)

const projectSeed = [
    {
        creator: "falbuna1@gmail.com",
        title: "Bug Tracker Project",
        description: "My first project using the bug tracker."
    }
]

db.Project
    .remove({})
    .then(() => db.Project.collection.insertMany(projectSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

db.Ticket
    .remove({})
    .catch(err => {
        console.log(err);
        process.exit(1);
    });

db.Comment
    .remove({})
    .catch(err => {
        console.log(err);
        process.exit(1);
    });