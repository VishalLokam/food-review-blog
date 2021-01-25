const express = require("express");
const router = express.Router();
const Review = require("../models/Review.js");
const Restaurant = require("../models/Restaurant.js");
const mongoose = require("mongoose");

//GET ALL REVIEWS
router.get("/", async ( req , res )=>{
    try{
        const reviews = await Review.find();
        res.json( reviews );
    }catch(err){
        res.json( { message: err } );
    }
});



//GET ALL REVIEWS FROM CITY
router.get("/city/:city", async ( req , res )=>{
    try{
        const reviews = await Review.find({city: req.params.city});
        res.json( reviews );
    }catch(err){
        res.json( { message: err } );
    }
});  



//POST A REVIEW
router.post("/", async (req,res)=>{
    const restaurant_id1=req.body.restaurant_id;
    const restaurant =  Restaurant.find({_id:restaurant_id1});
    console.log(restaurant);
    const review = new Review({
        title: req.body.title,
        review: req.body.review,
        restaurant_id: restaurant_id1,
        city: restaurant.city,
        restaurant_name: restaurant.name
    });

    try {
        const postReview = await review.save();
        res.json(postReview);
        
        
    } catch ( err ) {
        res.json( { message: err } );     
    }


});





module.exports = router;