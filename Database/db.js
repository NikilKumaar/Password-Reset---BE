const mongoose = require("mongoose")

require("dotenv").config();
//console.log(process.env.DB_URL);
const dbConnect = mongoose.connect(process.env.DB_URL).then((response) => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.log(err);
})  

module.exports = dbConnect;


