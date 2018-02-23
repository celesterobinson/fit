const express = require("express");
const workoutRoute = express.Router();
const Workout = require("../models/workout");

//GET
workoutRoute.get("/", (req, res) => {
    Workout.find({ user: req.user._id }, (err, workouts) => {
        if (err) return res.status(500).send(err);
        return res.send(workouts);
    });
});

//POST
workoutRoute.post("/", (req, res) => {
    const newWorkout = new Workout(req.body);
    newWorkout.user = req.user._id;
    newWorkout.save((err, savedWorkout) => {
        if (err) return res.status(500).send(err);
        return res.send(savedWorkout);
    });
});

//GET ONE
workoutRoute.get("/:id", (req, res) => {
    Workout.findById(req.params.id, (err, workout) => {
        if (err) return res.status(500).send(err);
        return res.send(workout);
    });
});

//PUT
workoutRoute.put("/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedWorkout) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedWorkout);
    });
});

//DELETE
workoutRoute.delete("/:id", (req, res) => {
    Workout.findByIdAndRemove(req.params.id, (err, deletedWorkout) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedWorkout);
    });
});

module.exports = workoutRoute;