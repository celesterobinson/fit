const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutModel = new Schema({
    name: String,
    exercises: [{
        reps: Number,
        sets: Number,
        weight: Number,
        exerciseId: {
            type: Schema.Types.ObjectId,
            ref: "exercises"
        }
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("workouts", WorkoutModel);