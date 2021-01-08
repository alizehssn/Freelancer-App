const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const JobSchema = new Schema({
    jobTitle: {
    type: String
    },
    jobDate: {
        type: Date,
        default: Date.now
    },
    income: {
        type: String

    },
    tip: {
        type: String
    },
    expenses: {
        type: String
    }
})
const Job = new mongoose.model("job", JobSchema);

module.exports = Job
