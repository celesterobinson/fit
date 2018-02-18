const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const config = require("./config");
const morgan = require("morgan");
const expressJwt = require("express-jwt");

const app = express();
app.use(bodyParser.json());

mongoose.connect(config.db, (err) => {
    if (err) throw err;
    console.log("Connected to the database! :)");
});

//middleware
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/api/exercise", require("./routes/exercise"));
app.use("/api/workout", require("./routes/workout"));
app.use("/auth", require("./routes/auth"));

app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});