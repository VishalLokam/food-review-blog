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
    },
    review_id: [mongoose.Schema.Types.ObjectId]
});

module.exports = mongoose.model('Restaurants', RestaurantSchema);