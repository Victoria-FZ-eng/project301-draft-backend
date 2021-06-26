'use strict';
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3010;




// localhost:3010/
app.get('/', home);

// localhost:3003/books?email=vzulof@gmail.com
// app.get('/profile', goToProfile);

function home (req, res){
    res.send('Home in Project 301');
}




app.listen(PORT, ()=>{
    console.log(`Listening to PORT ${PORT}`);
    
});
