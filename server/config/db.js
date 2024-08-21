const mongoose = require("mongoose");
require("dotenv").config();


async function connectDB(){
    try{
        console.log("Connecting DB...")
        await mongoose.connect(process.env.URI);
        console.log("DB connected successfully");

    }catch(e){
        console.log("Error Connecting to DB");
        console.log("Erorr: ",e);
    }
}

module.exports = connectDB;