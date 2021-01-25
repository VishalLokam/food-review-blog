const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    restaurant_id: {
        type: mongoose.ObjectId,
        required: true
    },
    city: {
        type: String,
        default: "Pune"
    },
    
    restaurant_name:{
        type: String,
    },
    likes: {
        type: Number,
        default: 0
    }
    
});

module.exports = mongoose.model('Reviews', ReviewSchema);