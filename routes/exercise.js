const express = require("express");
const exerciseRoute = express.Router();
const Exercise = require("../models/exercise");

//GET
exerciseRoute.get("/", (req, res) => {
    Exercise.find((err, exercises) => {
        if (err) return res.status(500).send(err);
        return res.send(exercises);
    });
});

//POST
exerciseRoute.post("/", (req, res) => {
    console.log("mongoose");
    const newExercise = new Exercise(req.body);
    newExercise.save((err, savedExercise) => {
        if (err) return res.status(500).send(err);
        return res.send(savedExercise);
    });
});

//GET ONE
exerciseRoute.get("/:id", (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        if (err) return res.status(500).send(err);
        return res.send(exercise);
    });
});

//PUT
exerciseRoute.put("/:id", (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedExercise) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedExercise);
    });
});

//DELETE
exerciseRoute.delete("/:id", (req, res) => {
    Exercise.findByIdAndRemove(req.params.id, (err, deletedExercise) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedExercise);
    });
});

module.exports = exerciseRoute;