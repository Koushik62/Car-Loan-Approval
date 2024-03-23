const port = 4000;
const express  = require("express");
const app = express();
const jwt =require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(express.json());

// using this our react will connect to the backend
app.use(cors());

mongoose.connect('mongodb://localhost:27017/');

app.get("/",(req,res)=>{
    res.send("Express is running");
})
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

// Crreatind Endpoint for registering 
app.post('/loginsignup',async(req,res)=>{
    
   
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
    
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})


})

app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"}) 
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})


const request = require('request');



// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint to handle /challans
app.post('/challans', (req, res) => {
  const apiKey = req.header('096ba636-90b7-4c10-842c-15f1f655d474');
  const accountId = req.header('07fb0057ed0c/d1add25b-4bf1-4b51-a659-8c523dc282ad');
  const externalApiUrl = 'https://eve.idfy.com/v3/tasks/async/verify_with_source/aadhaar_lite'; // Replace with your external API URL
  const requestData = req.body;

  // Make a request to the external API
  const options = {
    method: 'POST',
    url: externalApiUrl,
    headers: {
      'api-key': apiKey,
      'account-id': accountId,
      
    },
    body: JSON.stringify(requestData)
  };

  request(options, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send('Error making request to external API');
      return;
    }

    console.log('Response from external API:', body);
    res.send(body);
  });
});



app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on Port "+port);
    }
    else{
        console.log("Error"+error);
    }
})


