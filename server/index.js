const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./Models/UserModel");
const notifier = require('node-notifier');
require("dotenv").config();  // Add this line first

const bcrypt = require('bcrypt');
const saltRounds = 10;

const plainPassword = 'user123';

bcrypt.hash(plainPassword, saltRounds, function(err, hashedPassword) {
    if (err) throw err;

});


//backend port 
const port = 2007
//creating app using express
const app = express()
//parsing json data from frontend
app.use(express.json())
//using cors
app.use(cors())
//connectin to mongoDB local database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB Atlas...");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});
console.log("Connected to database...");


app.post("/signup", (req, res)=>{
    const {studentCode, password, ...rest} = req.body;
    UserModel.findOne({studentCode: studentCode})
    .then((user)=>{
        if(!user){
            // Hash password before saving
            bcrypt.hash(password, saltRounds, function(err, hashedPassword) {
                if (err) return res.json({ success: false, message: 'Error hashing password' });
                UserModel.create({studentCode, password: hashedPassword, ...rest})
                .then((result)=>{res.json(result)})
                .catch((error)=>{res.json(error)});
            });
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
            bcrypt.compare(password, user.password, function(err, result) {
                if (err) return res.json({ success: false, message: 'Error comparing password' });
                if(result){
                    res.json("Success");
                }
                else{
                    res.json("Worng password");
                }
            });
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
