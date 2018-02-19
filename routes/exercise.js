const express = require("express");
const exerciseRoute = express.Router();
const Exercise = require("../models/exercise");
const expressJwt = require("express-jwt");

//GET
exerciseRoute.get("/", (req, res) => {
    const query = {};
    if (req.query.creator === "me") {
        query.user = req.user._id;
    }
    Exercise.find(query, (err, exercises) => {
        if (err) return res.status(500).send(err);
        return res.send(exercises);
    });
});

//POST
exerciseRoute.post("/", (req, res) => {
    const newExercise = new Exercise(req.body);
    newExercise.user = req.user._id; //this line is not working
    newExercise.save((err, savedExercise) => {
        if (err) return res.status(500).send(err);
        return res.send(savedExercise);
    });
});

//GET ONE
exerciseRoute.get("/:exerciseId", (req, res) => {
    Exercise.findOne({_id: req.params.exerciseId, user: req.user._id}, (err, exercise) => {
        if (err) return res.status(500).send(err);
        return res.send(exercise);
    });
});

//PUT
exerciseRoute.put("/:exerciseId", (req, res) => {
    Exercise.findOneAndUpdate({_id: req.params.exerciseId, user: req.user._id}, req.body, { new: true }, (err, updatedExercise) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedExercise);
    });
});

//DELETE
exerciseRoute.delete("/:exerciseId", (req, res) => {
    Exercise.findOneAndRemove({_id: req.params.exerciseId, user: req.user._id}, (err, deletedExercise) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedExercise);
    });
});

module.exports = exerciseRoute;