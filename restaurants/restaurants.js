const express = require("express");
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
        const restaurants = await Restaurant.find( { city: city } );
        res.json( restaurants );
    }catch( err ){
        res.json( { message: err } );
    }
});



//GET RESTAURANT BY NAME
router.get("/name/:name", async ( req , res )=>{
    try{
        const name = req.params.name;
        const regex = new RegExp(name, 'i')   //i is for case insensitivity
        const restaurants = await Restaurant.find( { name: { $regex: regex } } );
        res.json( restaurants );
    }catch( err ){
        res.json( { message: err } );
    }
});



//GET RESTAURANT INFO
router.get("/id/:restaurantId", async ( req , res )=>{
    try{
      
        const restaurants = await Restaurant.findById(req.params.restaurantId);
        res.json( restaurants );
    }catch(err){
        res.json( { message: err } );
    }
});



//POST A RESTAURANT
router.post("/", async ( req , res )=>{
    

    
    var city = req.body.city;
    // if (typeof city !== 'undefined'){
    //     city = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();

    // }

    const restaurant = new Restaurant({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        address: req.body.address,
        city: city
    });
   
    
    
    try{
        const savedRestaurant = await restaurant.save();
        res.json(savedRestaurant);

    }catch(err){
        res.json( { message: err } );
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



module.exports = router;