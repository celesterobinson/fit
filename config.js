require("dotenv").config();

module.exports = {
    port: process.env.PORT,
    db: process.env.MONGODB_URI || "mongodb://localhost:27017/fit"
}
