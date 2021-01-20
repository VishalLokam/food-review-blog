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
    const randomId = mongoose.Types.ObjectId();
    const restaurant = await Restaurant.find({_id: req.body.restaurant_id});
    const review = new Review({
        _id: randomId,
        title: req.body.title,
        review: req.body.review,
        restaurant_id: req.body.restaurant_id,
        city: restaurant.city,
        username: req.body.username,
        restaurant_name: req.body.restaurant_name
    });

    try {
        const savedReview = await review.save();
        res.json( savedReview );
    } catch (err) {
        res.json( { message: err } );     
    }


});





module.exports = router;