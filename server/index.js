const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/routes");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())

app.use("/",router)



app.listen(8080,()=>{
    console.log("Server Started on 8080");
})

connectDB();
