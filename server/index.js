const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/UserModel");
const notifier = require('node-notifier');
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
    const {studentCode} = req.body;
    UserModel.findOne({studentCode: studentCode})
    .then((user)=>{
        if(!user){
            UserModel.create(req.body)
            .then((result)=>{res.json(result)})
            .catch((error)=>{res.json(error)});
        }
        else{
            // Send notification
            res.json({ success: false, message: 'Account already exists' });
            notifier.notify({
                title: " ",
                message: 'Account alredy exist',
                sound: true 
            });
        }
    })
    .catch((error)=>{console.log(error)});
})

app.post("/login", (req, res)=>{
    const {studentCode, password} = req.body;
    UserModel.findOne({studentCode: studentCode})
    .then((user)=>{
        if(user){
            if(user.password === password){
                res.json("Success");
            }
            else{
                res.json("Worng password");
            }
        }else{
            // Send notification
            res.json("User Not Found");
        }
    })
    .catch((error)=>{console.log(error)});
})
app.get("/user", async (req, res) => {
    const { studentCode } = req.query;
    if (!studentCode) {
        return res.status(400).json({ error: "Email is required" });
    }
    try {
        const user = await UserModel.findOne({ studentCode });
        if (!user) {
        return res.status(404).json({ error: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//starting server 
app.listen(port, ()=>{
    console.log(`Server is runing no port ${port}`);
})
