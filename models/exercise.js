const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    exerciseName: {
        type: String,
        required: true
    },
    targetedMuscles: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Exercise", exerciseSchema);