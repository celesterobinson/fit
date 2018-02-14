const express = require("express");
const groupRoute = express.Router();
const Group = require("../models/group");

//GET
groupRoute.get("/", (req, res) => {
    Group.find((err, groups) => {
        if (err) return res.status(500).send(err);
        return res.send(groups);
    });
});

//POST
groupRoute.post("/", (req, res) => {
    const newGroup = new Group(req.body);
    newGroup.save((err, savedGroup) => {
        if (err) return res.status(500).send(err);
        return res.send(savedGroup);
    });
});

//GET ONE
groupRoute.get("/:id", (req, res) => {
    Group.findById(req.params.id, (err, group) => {
        if (err) return res.status(500).send(err);
        return res.send(group);
    });
});

//PUT
groupRoute.put("/:id", (req, res) => {
    Group.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGroup) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedGroup);
    });
});

//DELETE
groupRoute.delete("/:id", (req, res) => {
    Group.findByIdAndRemove(req.params.id, (err, deletedGroup) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedGroup);
    });
});

module.exports = groupRoute;