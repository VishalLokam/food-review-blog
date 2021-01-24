const express = require("express");
const md5 = require('md5');
const router = express.Router();
const User = require("../models/User.js");


//GET ALL USERS
router.get("/", async ( req , res )=>{
    try{
        const users = await User.find();
        res.json( users );
    }catch(err){
        res.json( { message: err } );
    }
});


//GET A SEPCIFIC USER BY USERID
router.get("/id/:userId", async ( req, res )=>{
    try{
        const user = await User.findById( req.params.userId );
        res.json(user);
    }catch(err){
        res.json( { message: err } );
    }

});

//GET A SEPCIFIC USER BY USERNAME
router.get("/username/:user", async ( req, res )=>{
    try{
        const user = await User.find({username: req.params.userId});
        res.json(user);
    }catch(err){
        res.json( { message: err } );
    }

});

//POST A USER
router.post("/register", async ( req , res )=>{
    console.log( req.body );

    const user =  await User.find({username: req.body.username});

    if(user.length>=1){
        res.json({message:"user exists"});
    }
    else{
        var city = req.body.city;
        city = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
   
    const user = new User({
        username: req.body.username,
        password: md5(req.body.password),
        city: city
    });
    
    
    try{
        const savedUser = await user.save();
        res.json(savedUser);

    }catch(err){
        res.json( { message: err } );
    }
    }



    
});


//LOGIN FOR USER
router.post("/login", async ( req , res )=>{
   
    const user = await User.find({username: req.body.username, password: md5(req.body.password)});
    if(user.length>=1){
        res.json({message:"Login successful"});
    }
    else{
        res.json({message:"Login failed"});
    }
});

module.exports = router;