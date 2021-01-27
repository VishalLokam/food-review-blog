const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({
    restaurant_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    seating: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Restaurants", RestaurantSchema);
