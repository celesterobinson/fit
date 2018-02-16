const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercise = new Schema({
    name: String,
    category: String,
    instructions: String
});

module.exports = mongoose.model("exercises", Exercise);