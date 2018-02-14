const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutModel = new Schema({
    name: String,
    type: String,
    exercises: [{
        reps: Number,
        sets: Number,
        weight: Number,
        exerciseId: {
            type: Schema.Types.ObjectId,
            ref: "exercises"
        }
    }],
});

module.exports = mongoose.model("workouts", WorkoutModel);