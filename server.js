const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");


const app = express();

mongoose.connect(config.db, (err) => {
    if (err) throw err;
    console.log("Connected to the database! :)");
});

//middleware
app.use(bodyParser.json());
app.use("/exercise", require("./routes/exercise"));
app.use("/workout", require("./routes/workout"));

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});