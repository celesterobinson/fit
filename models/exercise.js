const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseModel = new Schema({
    name: String,
    category: String,
    targetedMuscles: String,
    instructions: String
});

module.exports = mongoose.model("exercises", ExerciseModel);