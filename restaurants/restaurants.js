const express = require("express");
const md5 = require('md5');
const router = express.Router();
const Restaurant = require("../models/Restaurant.js");



//GET ALL RESTAURANT
router.get("/", async ( req , res )=>{
    try{
        const restaurants = await Restaurant.find();
        res.json( restaurants );
    }catch( err ){
        res.json( { message: err } );
    }
});



//GET ALL RESTAURANT IN A  CITY
router.get("/city/:city", async ( req , res )=>{
    try{
        var city = req.params.city;
        city = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
        const restaurant = await Restaurant.find( { city: city } );
        if(restaurant.length>=1){
            res.json( restaurant );
        }
        else{
            res.json( { message: "No restaurant found in this city or name of the city is wrong" } );
        }
    }catch( err ){
        res.json( { message: err } );
    }
});






//GET RESTAURANT INFO
router.get("/id/:restaurantId", async ( req , res )=>{
    try{
      
        const restaurant = await Restaurant.find({_id: req.params.restaurantId});
        if(restaurant.length>=1){
            res.json(restaurant);
        }
        else{
            res.json({message: "No restaurant found"});
        }
        
    }catch(err){
        res.json( { message: err } );
    }
});



//REGISTER A RESTAURANT
router.post("/register", async ( req , res )=>{
    const restaurant =  await Restaurant.find({username: req.body.username});

    if(restaurant.length>=1){
        res.json({message:"Username exists"});
    }
    else{
        var city = req.body.city;
        if (typeof city !== 'undefined'){
        city = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();

    }

    const restaurant = new Restaurant({
        restaurant_name: req.body.restaurant_name,
        username: req.body.username,
        password: md5(req.body.password),
        address: req.body.address,
        city: city,
        seating: req.body.seating
    });
   
    try{
        const savedRestaurant = await restaurant.save();
        res.json({ message: "Restaurant registration successful" });

    }catch(err){
        res.json( { message: err } );
    }
    } 
});



//INSERT REVIEW ID IN THE RESTAURANT
router.patch("/insertReview" , async ( req,res )=>{
    try{
        const updatedReviewId = await Restaurant.updateOne( { _id: req.body._id }, 
            { $push: { review_id: req.body.review_id } 
        });
        res.json(updatedReviewId); 
    }catch(err){
        res.json( { message: err } );
    }
});


// LOGIN FOR RESTAURANT
router.post("/login", async ( req , res )=>{
   
    const restaurant = await Restaurant.find({username: req.body.username });
    if(restaurant.length>=1){
        const userInfo =  await Restaurant.find({username: req.body.username, password: md5(req.body.password) });

        if(userInfo.length>=1){
            res.json(userInfo); 
        }
        else{
            res.json({message:"Password doesn't match"});
        }
    }
    else{
        res.json({message:"Username not Found"});
    }
});


// PARTIAL TEXT SEARCH FOR SEARCHNG RESTAURANT NAME USING REGEX
router.get("/search/:name" , async ( req , res )=>{
    var name = req.params.name;
    try{
        const search = await Restaurant.find({
            restaurant_name: {
                $regex:new RegExp(name,"i")
            }
        });

        if(search.length>=1){
            res.json(search);
        }
        else{
            res.json({message: "No restaurant found"});
        }
         
    }
    catch(err){
        res.json( { message: err } );
    }

});

module.exports = router;