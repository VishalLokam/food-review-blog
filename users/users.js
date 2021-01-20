const express = require("express");
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


//GET A SEPCIFIC USER
router.get("/:userId", async ( req, res )=>{
    try{
        const user = await User.findById( req.params.userId );
        res.json(user);
    }catch(err){
        res.json( { message: err } );
    }

});

//POST A USER
router.post("/", async ( req , res )=>{
    console.log( req.body );
    var city = req.body.city;
        city = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
   
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        city: city
    });
    
    
    try{
        const savedUser = await user.save();
        res.json(savedUser);

    }catch(err){
        res.json( { message: err } );
    }
});


module.exports = router;