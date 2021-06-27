'use strict';
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3010;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    height: Number,
    weight: Number,
    favSport: String
});

const User = mongoose.model('user', userSchema);


const users=[];

// localhost:3010/
app.get('/', home);

//localhost:3010/newUser
app.post('/newUser',usersInfo);

function usersInfo(req,res){

    console.log("inside saving function");
    const {name, email, height, weight, age, favSport}= req.body;
    const newUser= new User({
        name: name,
        email: email,
        age:Number(age),
        height: Number(height), 
        weight: Number(weight),
        favSport:favSport
    });
    console.log(newUser)
    try{
   
    users.push(newUser); 
    newUser.save();
    res.status(200).send(users);
    console.log(newUser);
    
   
    console.log("pass");
}
    catch (err) {
        res.status(500).send(`${err}: ERROR IN CHECKING USER DATA`);
        console.log("catch");
    };
    
}

function home (req, res){
    
        console.log(users);
        res.status(200).send(users);
}




app.listen(PORT, ()=>{
    console.log(`Listening to PORT ${PORT}`);
    
});
