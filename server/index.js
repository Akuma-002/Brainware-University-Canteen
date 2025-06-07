const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//backend port 
const port = 2007
//creating app using express
const app = express()
//parsing json data from frontend
app.use(express.json())
//using cors
app.use(cors())
//connectin to mongoDB local database
mongoose.connect("mongodb://localhost:27017/canteen");
console.log("Connected to database...");

app.post("/signup", (req, res)=>{
    const {email} = req.body;
})



//starting server 
app.listen(port, ()=>{
    console.log(`Server is runing no port ${port}`);
})
