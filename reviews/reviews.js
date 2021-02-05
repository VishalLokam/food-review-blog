const express = require("express");
const router = express.Router();
const Review = require("../models/Review.js");
const Restaurant = require("../models/Restaurant.js");
const mongoose = require("mongoose");

//GET ALL REVIEWS
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (err) {
        res.json({ message: err });
    }
});

//GET ALL REVIEWS FROM CITY
router.get("/city/:city", async (req, res) => {
    try {
        var city = req.params.city;
        city = city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
        const reviews = await Review.find({ city: city });
        if (reviews.length >= 1) {
            res.json(reviews);
        } else {
            res.json({
                message:
                    "No review found in this city or name of the city is wrong",
            });
        }
    } catch (err) {
        res.json({ message: err });
    }
});


//GET ALL REVIEWS OF A PARTICULAR RESTAURANT
router.get("/:id", async (req, res) => {
    try {
        var id = req.params.id;
        
        const reviews = await Review.find({ _id: id });
        if (reviews.length >= 1) {
            res.json(reviews);
        } else {
            res.json({
                message:
                    "No review found for this restaurant",
            });
        }
    } catch (err) {
        res.json({ message: err });
    }
});


//POST A REVIEW
router.post("/", async (req, res) => {
    const restaurant = await Restaurant.find({ _id: req.body.restaurant_id });

    if (restaurant.length >= 1) {
        console.log(restaurant);

        const review = new Review({
            title: req.body.title,
            review: req.body.review,
            restaurant_id: req.body.restaurant_id,
            city: restaurant[0].city,
            restaurant_name: restaurant[0].name,
        });

        try {
            const postReview = await review.save();
            res.json({ message: "Review posted successfully" });
        } catch (err) {
            res.json({ message: err });
        }
    } else {
        res.json({
            message: "Restaurant not found or restaurant id is  wrong",
        });
    }
});

module.exports = router;
