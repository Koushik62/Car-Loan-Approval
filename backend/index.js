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

mongoose.connect('mongodb://localhost:27017');

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
// API creation




app.listen(port, (error)=>{
    if(!error){
        console.log("Server running on Port "+port);
    }
    else{
        console.log("Error"+error);
    }
})


