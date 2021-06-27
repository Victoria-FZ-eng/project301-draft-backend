'use strict';
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3010;


var users=[];

// localhost:3010/
app.get('/', home);

// localhost:3003/books?email=vzulof@gmail.com
// app.get('/profile', goToProfile);

//localhost:3010/newUser
app.post('/newUser',usersInfo);

function usersInfo(req,res){

    console.log("inside saving function");
    const {name, email, height, weight, age, favSport}= req.body;
    const newUser= {
        name: name,
        email: email,
        age:Number(age),
        height: Number(height), 
        weight: Number(weight),
        favSport:favSport
    };
    console.log(newUser)
    try{
   
    users.push(newUser);
    console.log(newUser);
    
    res.status(200).send(users);
    console.log("pass");
}
    catch (err) {
        res.status(500).send(`${err}: DATA NOT FOUND FOR REQUIRED LOCATION`);
        console.log("catch");
    };
    
}

function home (req, res){
    res.send('Home in Project 301');
}




app.listen(PORT, ()=>{
    console.log(`Listening to PORT ${PORT}`);
    
});
