const mongoose = require("mongoose");

const RestaurantSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        default: "Pune"
    }
    
});

module.exports = mongoose.model('Restaurants', RestaurantSchema);