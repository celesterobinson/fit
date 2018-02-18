const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercise = new Schema({
    name: String,
    category: String,
    instructions: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("exercises", Exercise);